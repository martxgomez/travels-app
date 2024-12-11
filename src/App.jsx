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

//routes

function App() {
 

  return (
  
      <div>
      <Navbar/>

      <section>
      <Routes>
      <Route path="*" element={<NotFoundPage />} />
     </Routes>
    </section>

      <Footer/> 
</div>
    
  )
}

export default App
