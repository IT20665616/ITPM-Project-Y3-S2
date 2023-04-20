
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Hansi/GramaNiladhariUI/Sidebar";
import Header from "./Components/Hansi/Header";
import HomePage from "./Components/Hansi/HomePage";
import RegisterPerson from "./Components/Sahan/RegisterPersonForm";
import CustomerCreate from "./Components/Malshan/CustomerCreate"
import AllRequests from "./Components/Malshan/AllRequests";
import Nicrequest from "./Components/Malshan/Nicrequest";
import Nicviewpage from "./Components/Malshan/Nicviewpage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/sidebar" element={<Sidebar />} />


        <Route path="/registerperson" element={<RegisterPerson />} />
        <Route path="/request" element={<CustomerCreate />} />
        <Route path="/allrequests" element={<AllRequests />} />
        <Route path="/nic" element={<Nicrequest />} />
        <Route path="/nicrequests" element={<Nicviewpage />} />


       
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
