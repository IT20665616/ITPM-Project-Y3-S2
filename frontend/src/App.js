// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Hansi/GramaNiladhariUI/Sidebar";
import Header from "./Components/Hansi/Header";
import HomePage from "./Components/Hansi/HomePage";
import AddSpecialNeed from "./Components/Hansi/GramaNiladhariUI/SpecialNeedCreate";
import SearchSpecialNeed from "./Components/Hansi/GramaNiladhariUI/SpecialNeedSearch";
import SingleSpecialNeed from "./Components/Hansi/GramaNiladhariUI/SpecialNeedSingle";
import ViewSpecialNeed from "./Components/Hansi/SpecialNeedsView";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/addSpecialNeed" element={<AddSpecialNeed />} />
        <Route path="/searchSpecialNeed" element={<SearchSpecialNeed />} />
        <Route path="/singleSpecialNeed/:id" element={<SingleSpecialNeed />} />
        <Route path="/viewSpecialNeed" element={<ViewSpecialNeed />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
