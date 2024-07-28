import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./modules/Navbar";
import LandingPage from "./modules/LandingPage";
function App() {
  return (
    <Router>
      <div className="flex flex-col ">
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
