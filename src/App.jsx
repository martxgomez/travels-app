//style
import "./App.css";
//data

//react
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "./supabase/config.js";

//components
import Navbar from "./components/Navbar";
import TravelsCommunity from "./pages/TravelsCommunity";
import Footer from "./components/footer";

//routes
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/notFound";
import Dashboardpage from "./pages/DashboardPage";


function App() {
  const [travels, setTravels] = useState([]);
    async function getData () {
        try{
        const response = await supabase
        .from('travels')
        .select()
        console.log("response ",response.data)
        setTravels(response.data); 
        } catch (error) {
            console.log("Error from getting API: ", error);
        }
        };
    
        useEffect(()=> {
            getData();
        }, []);

  return (
    <div>
      <Navbar />

      <section>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Dashboardpage travels={travels}/>} />
          <Route path="/community"  element={<TravelsCommunity />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
