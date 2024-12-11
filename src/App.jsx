//style
import "./App.css";
//data

//react
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

//routes
import MyTravelsPage from "./pages/MyTravelsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/notFound";

function App() {
  return (
    <div>
      <Navbar />

      <section>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/my-trips" element={<MyTravelsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
