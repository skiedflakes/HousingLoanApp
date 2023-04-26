import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import validator from "validator";

export default function SignIn() {

  const navigate = useNavigate();
  const [email,setEmail ]= useState()
  const [isValid,setIsValid ]= useState(false)

  function handleClick() {
    navigate(`/confirm-email?email=${email}`);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const handleChange = (event) => {
    const email = event.target.value;
    if (validator.isEmail(email)) {
      setEmail(email)
      setIsValid(true)
    } else {
      setIsValid(false)
     
    }
   
    };


  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
            disabled={!isValid}
          >
           Create account
          </Button>
          
        </Box>
      </Box>
    </Container>
  );
}