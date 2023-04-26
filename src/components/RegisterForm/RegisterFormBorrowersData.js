


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


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function RegisterFromCollateral() {
  return (
<div>
  <Typography   sx={{ marginTop: '20px',marginBottom: '30px',borderTop:0.2,paddingTop:2 }} component="h2" variant="h5">
      Borrower's Data
  </Typography>
  <Grid container spacing={2} justifyContent="center">

  <Grid item xs={6}>
  <InputLabel id="demo-simple-select-label">LAST NAME</InputLabel>
  <TextField
    required
    id="outlined-required"
    defaultValue=""
    fullWidth
  />
  </Grid>
  <Grid item xs={6} >
  <InputLabel id="demo-simple-select-label">FIRST NAME  </InputLabel>
  <TextField
    required
    id="outlined-required"
    defaultValue=""
    fullWidth
  />
  </Grid>
  </Grid>

  <Grid container spacing={2} sx={{marginTop:2}} justifyContent="center">

  <Grid item xs={6}>
  <InputLabel id="demo-simple-select-label">NAME EXTENSION</InputLabel>
  <TextField
    required
    id="outlined-required"
    defaultValue=""
    fullWidth
  />
  </Grid>
  <Grid item xs={6}>
  <InputLabel id="demo-simple-select-label">MIDDLE NAME </InputLabel>
  <TextField
    required
    id="outlined-required"
    defaultValue=""
    fullWidth
  />
  </Grid>
  </Grid>


  <Grid container spacing={2} sx={{marginTop:2}} justifyContent="center">

  <Grid item xs={6}>
  <InputLabel id="demo-simple-select-label">CITIZENSHIP</InputLabel>
  <TextField
    required
    id="outlined-required"
    defaultValue=""
    fullWidth
  />
  </Grid>
  <Grid item xs={6}>
  <InputLabel id="demo-simple-select-label">DATE OF BIRTH (mm/dd/yy) </InputLabel>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker/>
    </LocalizationProvider>

  </Grid>
  </Grid>


  <Grid container spacing={2} sx={{marginTop:2}} justifyContent="center">

  <Grid item xs={6}>

    <InputLabel sx={{marginTop:2}} id="demo-simple-select-label">SEX</InputLabel>
    <RadioGroup
    row
    aria-labelledby="demo-row-radio-buttons-group-label"
    name="row-radio-buttons-group"
    >
    <FormControlLabel value="yes" control={<Radio />} label="MALE" />
    <FormControlLabel value="no" control={<Radio />} label="FEMALE" />
    </RadioGroup>

  </Grid>
  <Grid item xs={6}>
  <InputLabel sx={{marginTop:2}} id="demo-simple-select-label">MARITAL STATUS</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      fullWidth
      label="Age"
      value={2}
    >
      <MenuItem value={1}>Single/Unmarried </MenuItem>
      <MenuItem value={2}>Married</MenuItem>
      <MenuItem value={3}>Annulled</MenuItem>
      <MenuItem value={4}>Legally Separated </MenuItem>
    </Select>
  </Grid>
  </Grid>
</div>
  );
}

