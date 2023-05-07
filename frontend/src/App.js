
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Hansi/GramaNiladhariUI/Sidebar";
import Header from "./Components/Hansi/Header";
import HomePage from "./Components/Hansi/HomePage";
import RegisterPerson from "./Components/Sahan/RegisterPersonForm";
import AddSpecialNeed from "./Components/Hansi/GramaNiladhariUI/SpecialNeedCreate";
import SearchSpecialNeed from "./Components/Hansi/GramaNiladhariUI/SpecialNeedSearch";
import SingleSpecialNeed from "./Components/Hansi/GramaNiladhariUI/SpecialNeedSingle";
import ViewSpecialNeed from "./Components/Hansi/SpecialNeedsView";
import DonatorDetails from "./Components/Hansi/GramaNiladhariUI/DonatorDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/registerperson" element={<RegisterPerson />} />
        <Route path="/addSpecialNeed" element={<AddSpecialNeed />} />
        <Route path="/searchSpecialNeed" element={<SearchSpecialNeed />} />
        <Route path="/singleSpecialNeed/:id" element={<SingleSpecialNeed />} />
        <Route path="/donatorDetails/:id" element={<DonatorDetails />} />
        <Route path="/viewSpecialNeed" element={<ViewSpecialNeed />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
