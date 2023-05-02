
import { BrowserRouter, Routes, Route } from "react-router-dom";// import-react-router-dom
//this is use to create navigation routes for pages

import Sidebar from "./Components/Hansi/GramaNiladhariUI/Sidebar";
//import Header from "./Components/Hansi/Header";
import HomePage from "./Components/Hansi/HomePage";
//import RegisterPerson from "./Components/Sahan/RegisterPersonForm";
import RegisterForum from "./Components/Sahan/RegisterPersonForm";
import EditRegisterForm from "./Components/Sahan/EditRegisterForm";
import RegisterUpdate from "./Components/Sahan/EmployeeSingleDetails";
import RegisterPersonSearch from "./Components/Sahan/RegisterPersonSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/editforum" element={<EditRegisterForm/>} />
        <Route path="/personRegister" element={<RegisterForum/>} />
        <Route path="/updateForm/:id" element={<RegisterUpdate/>}/>
        <Route path="/personSearch" element={<RegisterPersonSearch/>}/>
      </Routes>
    </BrowserRouter>
  )
}//  <Route path="/registerPerson" element={<RegisterPerson />} />

export default App;
