import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Work from "./components/Work";
import Talk from "./components/Talk";
import About from "./components/About";
import Footer from "./components/Footer";
import { Context } from "./Helpers/Helper";
import { useState } from "react";

function App() {
  const [changeMode, setChangeMode] = useState(false);
  return (
    <>
      <Context.Provider value={{ changeMode, setChangeMode }}>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/talk" element={<Talk />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
