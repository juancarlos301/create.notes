import Navbar from "./componentes/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlockNotes from "./pages/blockNotes";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlockNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
