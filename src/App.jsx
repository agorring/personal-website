import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { v4 as uuidv4 } from 'uuid';
import { Amplify } from 'aws-amplify';
import { uploadData, getUrl } from 'aws-amplify/storage';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

import { createNote, updateNote, deleteNote } from './graphql/mutations';
import { listNotes } from './graphql/queries';
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";

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
        console.error('Please provide a name and description for the note.');
        return;
      }

      let imageUrl;

      try {
        imageUrl = await uploadImage(); // Note: Removed selectedImage parameter
      } catch (uploadError) {
        console.error('Error uploading image:', uploadError);
        return;
      }
  
      const newNote = await client.graphql({
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
      setNoteName('');
      setNoteDescription('');
      setSelectedImage(null);
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file)
      console.log("File name:", file.name);
      console.log("File size:", file.size);
      console.log("File type:", file.type);
      console.log("Last modified:", file.lastModified);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something with the selectedImage, for example, send it to a server or display it in another component
    if (selectedImage) {
      console.log("Selected Image:", selectedImage);
      // Perform other actions with the image here
    } else {
      console.log("No image selected");
    }

    createNewNote();
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
                validateObjectExistence: true // defaults to false
              }
            });
            console.log(url)
            note.image = url; // Update the note's image property
          }
          return note;
        })
      );
    
      // Set the updated notes with correct image URLs
      setNotes(notesFromAPI);
    } catch (error) {
      console.error('Error fetching notes:', error);
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
          }
        }
      }).result;

      console.log('Succeeded: ', result);
      return result.key

    } catch (error) {
      console.log('Error : ', error);
    }
  }
  
  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await client.graphql({
      query: deleteNote,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App" style={{color: "#61dafb", padding: "20px" }}>
      <Heading level={1} style={{ color: "#61dafb" }}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>

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
          style={{ marginRight: "10px", backgroundColor: "#fff", color: "#333" }}
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
          style={{ marginRight: "10px", backgroundColor: "#fff", color: "#333" }}
        />
        <Button type="submit" variation="primary" style={{ backgroundColor: "#61dafb", color: "#fff" }}>
          Create Note
        </Button>
      </Flex>
      </View>
      <Heading level={2} style={{ color: "#61dafb" }}>Current Notes</Heading>
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

            <Text as="strong" fontWeight={700} style={{ marginRight: "10px", color: "#fff" }}>
              {note.name}
            </Text>
            <Text as="span" style={{ marginRight: "10px", color: "#fff" }}>
              {note.description}
            </Text>
            <Button variation="link" onClick={() => deleteNote(note)} style={{ color: "#61dafb" }}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>

      <Button onClick={signOut} style={{ backgroundColor: "#61dafb", color: "#fff" }}>
        Sign Out
      </Button>
    </View>
  );
};

export default withAuthenticator(App);