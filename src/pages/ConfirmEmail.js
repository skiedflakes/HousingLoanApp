import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate,useLocation } from "react-router-dom";

export default function ConfirmEmail() {
  const navigate = useNavigate();
  const {search} = useLocation();
  const queryParams = new URLSearchParams(search)
  const email = queryParams.get('email')
  
  function handleClick() {
    navigate("/terms-and-condition");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    // Assign value to a key
  sessionStorage.setItem("user", data);

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
          You've got an email
        </Typography>
        <Typography sx={{textAlign:'center'}}>
          We've sent a code to  {email}. To confirm your email address, enter the 6-digit code below in the next 10minutes.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="6-digit code"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
          >
          Verify and continue
          </Button>
          
        </Box>
      </Box>
    </Container>
  );
}