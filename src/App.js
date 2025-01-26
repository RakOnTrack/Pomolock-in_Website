import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WorkMode from "./pages/WorkMode";
// import Chat from "./pages/Chat";
// import Matchmaking from "./pages/Matchmaking";

const App = () => {



  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workmode" element={<WorkMode />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        {/* <Route path="/matchmaking" element={<Matchmaking />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
