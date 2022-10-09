import React, { useState } from "react";
import {
  CssBaseline,
  Grid,
  Paper,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contact, setContact] = useState(contactsJSON);

  const addContact = (newContact) => {
    setContact([...contact, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <br />
      <Grid container sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={6} component={Paper} elevation={3}>
          <ContactForm add={addContact} />
        </Grid>
        <Grid item xs={12} sm={6} component={Paper} elevation={3}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {contact.map((c) => (
                <div key={c.name}>
                  <Contact data={c} />
                </div>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
