import { useState } from "react";
import "./DashboardPage.css"
import TravelList from "../components/travels/TravelList"

function Dashboardpage ({travels, favorites, addFavorite}) {

    const [search, setSearch] = useState("");

        const handleSearch = (event) => {
            setSearch(event.target.value);
        };
        const filteredTravels = travels.filter((travel)=> travel.destination.toLowerCase().includes(search.toLowerCase())
);
        return (
           
            <div>
                <h2>Travels List</h2>
                <input
                    type="text"
                    placeholder="Search by destination..."
                    value={search}
                    onChange={handleSearch}
                    />
                <TravelList travels={filteredTravels} favorites={favorites} addFavorite={addFavorite}/>
            </div>
        );
     }



export default Dashboardpage;