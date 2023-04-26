import * as React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import RegisterForm from '../pages/RegisterForm';
import ConfirmEmail from '../pages/ConfirmEmail';
import TermsAndCondition from '../pages/TermsAndCondition';
export default function LoginRoutes () {
    const location = useLocation();
    return (
       
        <Routes>
    
        <Route path="/" element={<Register/>} />
        <Route path="/confirm-email" element={<ConfirmEmail/>} />
        <Route path="/terms-and-condition" element={<TermsAndCondition/>} />
        <Route path="/register-form" element={<RegisterForm/>} />
        {/* <Route path="/login" element={<Login/>}/> */}
       </Routes>
     
    );
}