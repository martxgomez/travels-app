//style
import "./App.css";
//data


// //react
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

//routes
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <Navbar />

      <section>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<AboutPage /> }  />
        </Routes>
      </section>

      <Footer />
    </div>
  );
}

export default App;
