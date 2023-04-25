
import { BrowserRouter, Routes, Route } from "react-router-dom";// import-react-router-dom
//this is use to create navigation routes for pages

import Sidebar from "./Components/Hansi/GramaNiladhariUI/Sidebar";
//import Header from "./Components/Hansi/Header";
import HomePage from "./Components/Hansi/HomePage";
//import RegisterPerson from "./Components/Sahan/RegisterPersonForm";
import RegisterForum from "./Components/Sahan/RegisterForum";
import EditRegisterForm from "./Components/Sahan/EditRegisterForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/editforum" element={<EditRegisterForm/>} />
        <Route path="/take" element={<RegisterForum/>} />
      </Routes>
    </BrowserRouter>
  )
}//  <Route path="/registerPerson" element={<RegisterPerson />} />

export default App;
