import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { borderBottom } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function RegisterFrom() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
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

  const handleChange = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });}
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 5,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
        HOUSING LOAN APPLICATION
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>


        <Grid container spacing={2}   justifyContent="center" sx={{borderBottom:0.2,paddingBottom:3}}>
        <Grid item xs={6}>
         <InputLabel id="demo-simple-select-label">Pag-IBIG MID Number/RTN</InputLabel>
        <TextField
          required
          id="outlined-required"
          defaultValue=""
          fullWidth
        />
        </Grid>
        <Grid item xs={6}>
        <InputLabel id="demo-simple-select-label">Housing Account Number</InputLabel>
        <TextField
          required
          id="outlined-required"
          defaultValue=""
          fullWidth
        />
      </Grid>
      </Grid>
      <Typography  sx={{ marginTop: '20px',marginBottom: '30px', }} component="h2" variant="h5">
        Loan Particulars
        </Typography>

                <InputLabel id="demo-simple-select-label">Purpose Of Loan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            label="Age"
            value={2}
          >

            

            <MenuItem value={1}>Purchase of fully developed residential lot or adjoining residential lots</MenuItem>
            <MenuItem value={2}>Home improvement</MenuItem>
            <MenuItem value={3}>Refinancingofanexistinghousingloan</MenuItem>
            <MenuItem value={4}>Purchase of residential lot plus cost of transfer of title</MenuItem>

          </Select>
          <InputLabel sx={{marginTop:2}} id="demo-simple-select-label">WITH EXISTING HOUSING APPLICATION</InputLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="YES" />
        <FormControlLabel value="no" control={<Radio />} label="NO" />
      </RadioGroup>
      <Grid container spacing={2}   justifyContent="center">
        <Grid item xs={6}>
         <InputLabel id="demo-simple-select-label">DESIRED LOAN AMOUNT </InputLabel>
        <TextField
          required
          id="outlined-required"
          defaultValue=""
          fullWidth
        />
        </Grid>
        <Grid item xs={6}>
        <InputLabel id="demo-simple-select-label">DESIRED LOAN TERM (Years)</InputLabel>
        <TextField
          required
          id="outlined-required"
          defaultValue=""
          fullWidth
        />
      </Grid>
      </Grid>

      <InputLabel sx={{marginTop:2}} id="demo-simple-select-label">DESIRED RE-PRICING PERIOD (Year/s)</InputLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="1" />
        <FormControlLabel value="3" control={<Radio />} label="3" />
        <FormControlLabel value="5" control={<Radio />} label="5" />
        <FormControlLabel value="10" control={<Radio />} label="10" />
        <FormControlLabel value="15" control={<Radio />} label="15" />
        <FormControlLabel value="20" control={<Radio />} label="20" />
        <FormControlLabel value="25" control={<Radio />} label="25" />
        <FormControlLabel value="30" control={<Radio />} label="30" />
      </RadioGroup>

      <InputLabel id="demo-simple-select-label">MODE OF PAYMENT</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            label="Age"
            value={2}
          >

            

            <MenuItem value={1}>Salary deduction</MenuItem>
            <MenuItem value={2}>Collecting Agent</MenuItem>
            <MenuItem value={3}>Over-the-Counter</MenuItem>
    
          </Select>


          <Typography  sx={{ marginTop: '20px',marginBottom: '30px',borderTop:0.2,paddingTop:2 }} component="h2" variant="h5">
          Collateral
        </Typography>
        <InputLabel id="demo-simple-select-label">PROPERTY LOCATION (Street, Municipality, Province)</InputLabel>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={2}
          fullWidth
        />

<InputLabel sx={{marginTop:2}} id="demo-simple-select-label">NAME OF DEVELOPER/REGISTERED TITLE HOLDER</InputLabel>
        <TextField
          required
          id="outlined-required"
          defaultValue=""
          fullWidth
        />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleClick}
          >
            Register
          </Button>
         

        </Box>
      </Box>
    </Container>
  );
}