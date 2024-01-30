import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify';
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
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const client = generateClient();

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);
  const [noteName, setNoteName] = useState("");
  const [noteDescription, setNoteDescription] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const result = await client.graphql({ query: listNotes });
    const notesFromAPI = result.data.listNotes.items;
    setNotes(notesFromAPI);
  }

  
  async function createNewNote() {
    const newNote = await client.graphql({
      query: createNote, // using the imported mutation
      variables: {
        input: {
          "name": noteName,
          "description": noteDescription
        }
      }
    });
    fetchNotes();
    setNoteName(""); // Clear the input fields after creating a note
    setNoteDescription("");
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await client.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App" style={{color: "#61dafb", padding: "20px" }}>
      <Heading level={1} style={{ color: "#61dafb" }}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={(e) => {
        e.preventDefault();
        createNewNote();
      }} style={{ marginBottom: "20px" }}>
        <Flex direction="row" justifyContent="center">
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