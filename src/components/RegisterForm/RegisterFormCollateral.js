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

export default function RegisterFromCollateral() {
  return (
  <div>
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
          id="outlined-multiline-static"
          multiline
        
          fullWidth
        />

<Grid container spacing={2}  sx={{marginTop:2}} justifyContent="center">
<Grid item xs={6}>
 <InputLabel id="demo-simple-select-label">TCT/OCT/CCT NO.</InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>
</Grid>
<Grid item xs={6}>
<InputLabel id="demo-simple-select-label">TAX DECLARATION NO.</InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>
</Grid>
</Grid>

<Grid container spacing={2} sx={{marginTop:2}}  justifyContent="center">
<Grid item xs={6}>
 <InputLabel id="demo-simple-select-label">LOT/UNIT NO.</InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>
</Grid>
<Grid item xs={6}>
<InputLabel id="demo-simple-select-label" >BLOCK/BLDG NO.</InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>
</Grid>
</Grid>

<Grid container spacing={2}sx={{marginTop:2}}   justifyContent="center">
<Grid item xs={6}>
 <InputLabel>IS PROPERTY PRESENTLY <br/>
MORTGAGED?</InputLabel>
<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
name="row-radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="YES" />
<FormControlLabel value="no" control={<Radio />} label="NO" />
</RadioGroup>
</Grid>
<Grid item xs={6}>
<InputLabel id="demo-simple-select-label">LAND AREA/FLOOR AREA (SQM)</InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>
</Grid>
</Grid>

<InputLabel id="demo-simple-select-label">LAND AREA/FLOOR AREA (SQM)</InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>


<InputLabel sx={{marginTop:2}} id="demo-simple-select-label">TYPE OF PROPERTY</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    fullWidth
    label="Age"
    value={2}
  >

    

    <MenuItem value={1}>Rowhouse</MenuItem>
    <MenuItem value={2}>Single Attached </MenuItem>
    <MenuItem value={3}>Single Detached </MenuItem>
    <MenuItem value={4}>Condominium</MenuItem>

  </Select>


<InputLabel sx={{marginTop:2,textAlign:'center'}}   id="demo-simple-select-label">  DESCRIPTION OF 
IMPROVEMENTS</InputLabel>

<InputLabel sx={{marginTop:2}}   id="demo-simple-select-label">No. of
STOREYS</InputLabel>
<Grid container spacing={2} justifyContent="center">

<Grid item xs={6}>
<InputLabel id="demo-simple-select-label">EXISTING</InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>
</Grid>
<Grid item xs={6}>
<InputLabel id="demo-simple-select-label">PROPOSED </InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>
</Grid>
</Grid>
<InputLabel sx={{marginTop:2}} id="demo-simple-select-label">TOTAL FLOOR 
AREA</InputLabel>
<Grid container spacing={2}   justifyContent="center">
<Grid item xs={6}>
<InputLabel id="demo-simple-select-label">EXISTING</InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>
</Grid>
<Grid item xs={6}>
<InputLabel id="demo-simple-select-label">PROPOSED </InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>
</Grid>
</Grid>

<InputLabel sx={{marginTop:2}} id="demo-simple-select-label">IS THE PROPERTY AN OFFSITE COLLATERAL? <br/>If yes, use separate sheet for the offsite collateral details</InputLabel>
<RadioGroup
row
aria-labelledby="demo-row-radio-buttons-group-label"
name="row-radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="YES" />
<FormControlLabel value="no" control={<Radio />} label="NO" />
</RadioGroup>

<InputLabel id="demo-simple-select-label">REASONS FOR USE OF OFFSITE COLLATERAL</InputLabel>
<TextField
  required
  id="outlined-required"
  defaultValue=""
  fullWidth
/>



  </div>
  );
}