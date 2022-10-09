// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import * as React from "react";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@mui/material";

const ContactForm = (props) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [newContact, setNewContact] = React.useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const onInputChange = (event) => {
    setNewContact((kontak) => ({
      ...kontak,
      [event.target.id]: event.target.value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.add(newContact);
    setNewContact({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });
  };

  return (
    <>
      <Box component="form" noValidate onSubmit={submitForm} sx={{ mt: 3 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"
                  type="text"
                  label="Name"
                  id="name"
                  size="small"
                  variant="filled"
                  value={newContact.name}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  type="text"
                  label="Phone"
                  id="phone"
                  size="small"
                  onChange={onInputChange}
                  value={newContact.phone}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  type="text"
                  label="Email"
                  id="email"
                  size="small"
                  onChange={onInputChange}
                  value={newContact.email}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="photo"
                  type="text"
                  label="Photo Url"
                  id="photo"
                  size="small"
                  onChange={onInputChange}
                  value={newContact.photo}
                  variant="filled"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button fullWidth size="small" type="submit" variant="contained">
              Submit
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default ContactForm;
