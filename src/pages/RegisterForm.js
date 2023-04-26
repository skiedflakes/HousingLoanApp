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

//components
import LoanParticulars from '../components/RegisterForm/RegisterFormLoanParticulars'
import Collateral from '../components/RegisterForm/RegisterFormCollateral'
import BorrwersData from '../components/RegisterForm/RegisterFormBorrowersData'

export default function RegisterFrom() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
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
        <Box component="form" noValidate sx={{ mt: 1, width:'100%'}} maxWidth="lg">
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
          <LoanParticulars/>
          <Collateral/>
          <BorrwersData/>
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