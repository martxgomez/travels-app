//style
import "./App.css";
//data
import Footer from "./components/footer";
import NotFoundPage from "./pages/notFound";
// //react
 import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

//components
import Navbar from "./components/Navbar";
import TravelsCommunity from "./pages/TravelsCommunity";
//routes

function App() {
 

  return (
  
      <div>
      <Navbar/>

      <section>
      <Routes>
      <Route path="/community"  element={<TravelsCommunity />} />
      <Route path="*" element={<NotFoundPage />} />
     </Routes>
    </section>

      <Footer/> 
</div>
    
  )
}

export default App
