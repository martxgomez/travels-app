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
import MyFavList from "./components/travels/MyFavList.jsx";

//routes
import MyTravelsPage from "./pages/MyTravelsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFound";
import Dashboardpage from "./pages/DashboardPage";
import UserPage from "./pages/UserPage.jsx";

function App() {
  const [travels, setTravels] = useState([]);
  const [favorites, setFavorites] = useState([]);  //state for the favorite travels

  async function getData() {
    try {
      const response = await supabase.from("travels").select();
    
      setTravels(response.data);
    } catch (error) {
      console.log("Error from getting API: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  //Function to handle favorites
  const addFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favorite => favorite !==id));
    } else {
      setFavorites([...favorites, id])
    }
  };

  return (
    <div>
      <Navbar />

      <section>
        <Routes>
          <Route path="/" element={<Dashboardpage travels={travels} favorites={favorites} addFavorite={addFavorite}/>} />
          <Route path="/my-trips" element={<MyTravelsPage travels={travels} setTravels={setTravels} />} />
          <Route path="/my-favs" element={<MyFavList travels={travels} favorites={favorites} addFavorite={addFavorite} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<TravelsCommunity />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/userpage" element={<UserPage/>} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
