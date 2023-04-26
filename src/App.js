import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MainLayout from './layouts/Mainlayout';
import LoginRoutes from './routes/LoginRoutes';

const mdTheme = createTheme();

export default function App() {

  // Access value associated with the key
var item_value = sessionStorage.getItem("user");

console.log(item_value)
  return (
    <ThemeProvider theme={mdTheme}>
   
    {item_value? <MainLayout/>:  <LoginRoutes/>}
    
    </ThemeProvider>
  );
}