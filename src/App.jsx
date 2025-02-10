import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Home from "./pages/Home";
import React from "react";
import "@fontsource/urbanist";
import "./App.css";
import AppLayout from "./components/Layout/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="country" element={<Country />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
