import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import Finalize from "./pages/Finalize/Finalize";
import Results from "./pages/Results/Results";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/results/:testId" element={<Results />} />
        <Route path="/finalize/:testId" element={<Finalize />} />
      </Routes>
    </Router>
  );
}

export default App;
