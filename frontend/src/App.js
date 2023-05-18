
import { BrowserRouter, Routes, Route } from "react-router-dom";// import-react-router-dom
//this is use to create navigation routes for pages

import Sidebar from "./Components/Hansi/GramaNiladhariUI/Sidebar";
import HomePage from "./Components/Hansi/HomePage";


import RegisterForum from "./Components/Sahan/RegisterPersonForm";
import EditRegisterForm from "./Components/Sahan/EditRegisterForm";
import RegisterUpdate from "./Components/Sahan/EmployeeSingleDetails";
import RegisterPersonSearch from "./Components/Sahan/RegisterPersonSearch";


import CustomerCreate from "./Components/Malshan/CustomerCreate"
import AllRequests from "./Components/Malshan/AllRequests";
import Nicrequest from "./Components/Malshan/Nicrequest";
import NicResults from "./Components/Malshan/NicResults";
import EditRequest from "./Components/Malshan/EditRequest";
import Details from "./Components/Malshan/DetailsForGN";


import AddSpecialNeed from "./Components/Hansi/GramaNiladhariUI/SpecialNeedCreate";
import SearchSpecialNeed from "./Components/Hansi/GramaNiladhariUI/SpecialNeedSearch";
import SingleSpecialNeed from "./Components/Hansi/GramaNiladhariUI/SpecialNeedSingle";
import ViewSpecialNeed from "./Components/Hansi/SpecialNeedsView";
import DonatorDetails from "./Components/Hansi/GramaNiladhariUI/DonatorDetails";

import RegisterPerson from "./Components/Sahan/RegisterPersonForm";

import officers from './Components/Eshara/village officers/officers';
import registerOfficers from './Components/Eshara/village officers/registerOfficers';
import editOfficer from './Components/Eshara/village officers/editOfficer';
import AllAppointments from "./Components/Eshara/Appointment/AllAppointments";
import AppointmentCreate from "./Components/Eshara/Appointment/AppointmentCreate";

// import appointments from "./Components/Eshara/appointments/appointments";
import createAppointments from "./Components/Eshara/appointments/createAppointment";
import editAppointment from "./Components/Eshara/appointments/editAppointment";





function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/sidebar" element={<Sidebar />} />

        <Route path="/editforum" element={<EditRegisterForm />} />
        <Route path="/personRegister" element={<RegisterForum />} />
        <Route path="/updateForm/:id" element={<RegisterUpdate />} />
        <Route path="/personSearch" element={<RegisterPersonSearch />} />


        <Route path="/request" element={<CustomerCreate />} />
        <Route path="/allrequests" element={<AllRequests />} />
        <Route path="/nic" element={<Nicrequest />} />
        <Route path="/nic/:nic" element={<NicResults />} />
        <Route path="/editRequest/:id" element={<EditRequest />} />
        <Route path="/details/:id" element={<Details />} />


        <Route path="/addSpecialNeed" element={<AddSpecialNeed />} />
        <Route path="/searchSpecialNeed" element={<SearchSpecialNeed />} />
        <Route path="/singleSpecialNeed/:id" element={<SingleSpecialNeed />} />
        <Route path="/donatorDetails/:id" element={<DonatorDetails />} />
        <Route path="/viewSpecialNeed" element={<ViewSpecialNeed />} />
        <Route path="/registerperson" element={<RegisterPerson />} />

        <Route path="/appoitments" element={<AllAppointments />} />
        <Route path="/addAppointment" element={<AppointmentCreate />} />


        <Route path="/officers" element={officers} />
        <Route path="/officers/add" element={registerOfficers} > </Route>
        <Route path="/officers/update/:id" element={editOfficer}></Route>
        {/* <Route path="/appointments" element={AllAppointments}/> */}

        {/* <Route path="/appointments" element={appointments} > </Route> */}
        {/* <Route path="/appointments/add" element={createAppointments} > </Route> */}
        <Route path="/appointment/update/:id" element={editAppointment}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App;
