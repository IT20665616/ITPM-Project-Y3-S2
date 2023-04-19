
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Hansi/GramaNiladhariUI/Sidebar";
import Header from "./Components/Hansi/Header";
import HomePage from "./Components/Hansi/HomePage";
import RegisterPerson from "./Components/Sahan/RegisterPersonForm";
import React from "react";
import './App.css';

import officers from './Components/Eshara/village officers/officers';
import registerOfficers from './Components/Eshara/village officers/registerOfficers';
import editOfficer from './Components/Eshara/village officers/editOfficer';
import userProfile from "./Components/Eshara/village officers/userProfile";

import appointments from "./Components/Eshara/appointments/appointments";
import createAppointments from "./Components/Eshara/appointments/createAppointment";
import editAppointment from "./Components/Eshara/appointments/editAppointment";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/sidebar" element={<Sidebar />} />


        <Route path="/registerperson" element={<RegisterPerson />} />
        <Route path="/officers" exact Component={ officers } > </Route>
      <Route path="/officers/add" Component={ registerOfficers  } > </Route>
      <Route path="/officers/update/:id" Component={editOfficer}></Route>
      <Route path="/officers/:id" Component={userProfile}></Route>
    
      

      <Route path="/appointments" exact Component={ appointments } > </Route>
      <Route path="/appointments/add" Component={ createAppointments  } > </Route>
      <Route path="/appointment/update/:id" exact Component={editAppointment}></Route>


      </Routes>
    </BrowserRouter>
  )
    

}

export default App;
