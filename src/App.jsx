import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { v4 as uuidv4 } from "uuid";
import {
  createNote,
  updateNote,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import { listNotes } from "./graphql/queries";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";

import { Amplify } from "aws-amplify";
import { uploadData, getUrl, remove } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/api";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

const client = generateClient();

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);
  const [noteName, setNoteName] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const createNewNote = async () => {
    try {
      if (!noteName || !noteDescription) {
        console.error("Please provide a name and description for the note.");
        return;
      }

      let imageUrl;

      try {
        imageUrl = await uploadImage(); // Note: Removed selectedImage parameter
      } catch (uploadError) {
        console.error("Error uploading image:", uploadError);
        return;
      }

      await client.graphql({
        query: createNote,
        variables: {
          input: {
            name: noteName,
            description: noteDescription,
            image: imageUrl,
          },
        },
      });

      fetchNotes();
      setNoteName("");
      setNoteDescription("");
      setSelectedImage(null);
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedImage) {
      createNewNote();
    } else {
      console.log("No image selected");
    }
  };

  async function fetchNotes() {
    try {
      const result = await client.graphql({ query: listNotes });
      const notesFromAPI = result.data.listNotes.items;

      // Use Promise.all to wait for all promises to resolve
      await Promise.all(
        notesFromAPI.map(async (note) => {
          if (note.image) {
            // Update the note's image with the correct URL
            const url = await getUrl({
              key: note.image,
              options: {
                validateObjectExistence: true, // defaults to false
              },
            });
            note.image = url; // Update the note's image property
          }
          return note;
        })
      );

      // Set the updated notes with correct image URLs
      setNotes(notesFromAPI);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  async function uploadImage() {
    try {
      console.log("File name:", selectedImage.name);
      const result = await uploadData({
        key: `${uuidv4()}_${selectedImage.name}`,
        data: selectedImage,
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              console.log(
                `Upload progress ${
                  Math.round(transferredBytes / totalBytes) * 100
                } %`
              );
            }
          },
        },
      }).result;

      console.log("Succeeded: ", result);
      return result.key;
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  async function deleteNote(thisNote) {
    const newNotes = notes.filter((note) => note.id !== thisNote.id);
    setNotes(newNotes);
    try {
      // Remove image by passing the filename of the S3 object
      await remove({
        key: thisNote.image.url.pathname.replace(/^\/public\//, ""),
      });
      //Remove the note from the database
      await client.graphql({
        query: deleteNoteMutation,
        variables: { input: { id: thisNote.id } },
      });
    } catch (error) {
      console.log("Error ", error);
    }
  }

  return (
    <View className="App" style={{ color: "#61dafb", padding: "20px" }}>
      <Heading level={2} style={{ color: "#61dafb" }}>
        My Notes App
      </Heading>
      <View
        as="form"
        margin="3rem 0"
        onSubmit={handleSubmit}
        style={{ marginBottom: "20px" }}
      >
        {/* Image input */}
        <Flex direction="row" justifyContent="center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ marginRight: "10px" }}
          />

          {/* Name input */}
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
            value={noteName}
            onChange={(e) => setNoteName(e.target.value)}
            style={{
              marginRight: "10px",
              backgroundColor: "#fff",
              color: "#333",
            }}
          />

          {/* Description input */}
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
            style={{
              marginRight: "10px",
              backgroundColor: "#fff",
              color: "#333",
            }}
          />
          <Button
            type="submit"
            variation="primary"
            style={{ backgroundColor: "#61dafb", color: "#fff" }}
          >
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2} style={{ color: "#61dafb" }}>
        Current Notes
      </Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ marginBottom: "10px" }}
          >
            {/* Render image if it exists */}
            {note.image && (
              <img
                src={note.image.url}
                alt={`Image for ${note.name}`}
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
            )}

            <Text
              as="strong"
              fontWeight={700}
              style={{ marginRight: "10px", color: "#fff" }}
            >
              {note.name}
            </Text>
            <Text as="span" style={{ marginRight: "10px", color: "#fff" }}>
              {note.description}
            </Text>
            <Button
              variation="link"
              onClick={() => deleteNote(note)}
              style={{ color: "#61dafb" }}
            >
              Delete note
            </Button>
          </Flex>
        ))}
      </View>

      <Button
        onClick={signOut}
        style={{ backgroundColor: "#61dafb", color: "#fff" }}
      >
        Sign Out
      </Button>
    </View>
  );
};

export default withAuthenticator(App);
