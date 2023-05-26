import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import ProjectFrontPage from './ProjectFrontPage/ProjectFrontPage';
import PortFolioFrontPage from "./PortFolioFrontPage/PortFolioFrontPage"


import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectFrontPage />}></Route>
          <Route path="/portfolio" element={<PortFolioFrontPage />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;



