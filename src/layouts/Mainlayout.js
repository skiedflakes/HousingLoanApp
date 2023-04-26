import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';

import Routes from '../routes/Routes';
import AppBar from '../components/AppBar';
import BottomBar from '../components/BottomBar'

const mdTheme = createTheme();
const styled_box = {
backgroundColor: (theme) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
}

export default function MainLayout (){
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar/>
    <Box component="main" sx={styled_box}>
      <Toolbar />
      <Routes/>
      <BottomBar sx={{ pt: 4 }} />
    </Box>
  </Box>
  );
}