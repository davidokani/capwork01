import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signinform from "./components/signin/Signinform";
import Regform from "./components/registration/Regform";
import Landing from "./components/langingpage/Landing";
import Recoverpassword from "./components/signin/recoverpassword/Recoverpassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signinform />} />
          <Route path="/register" element={<Regform />} />
          <Route path="/recover" element={<Recoverpassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* fevil was here  */