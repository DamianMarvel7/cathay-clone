import Home from "./Home";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Maintenance from "./Maintenance";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Maintenance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
