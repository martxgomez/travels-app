import { useState } from "react";
import "./DashboardPage.css"
import TravelList from "../components/travels/TravelList"

function Dashboardpage ({travels, favorites, addFavorite}) {

    // CREATION FILTER BY DESTINATION (SEARCH FIELD BY TYPING)
    // 1. STATE
    const [search, setSearch] = useState("");

    // 2. HANDLE FUNCTION
        const handleSearch = (event) => {
            setSearch(event.target.value);
        };

    

    // CREATION FILTER BY DURATION (DAYS)
    // 1. STATE
    const [maxDuration, setMaxDuration] = useState("");

    // 2. HANDLE FUNCTION
    const handleMaxDuration = (event) => {
            setMaxDuration(event.target.value);
    }

    // 3. UPDATE RESULT
    const filteredTravels = travels.filter((travel)=> {
        const matchesDestination = travel.destination.toLowerCase().includes(search.toLowerCase()); //first filter - destinations that match what we type in the search bar
        const matchesDuration = maxDuration ? travel.duration <= maxDuration : true; // second filter - travels that match the entered duration (or less), when we have a duration (value entered)

        return matchesDestination && matchesDuration; 
});
        return (
           
            <div>
                <h2>Travels List</h2>
                {/* INPUT FOR THE SEARCH OF DESTINATION */}
                <input
                    type="text"
                    placeholder="Search by destination"
                    value={search}
                    onChange={handleSearch}
                    />
                
                {/* INPUT FOR THE SEARCH BY DURATION */}
                <input
                    type="number"
                    placeholder="Max days"
                    value={maxDuration}
                    onChange={handleMaxDuration}
                />


                <TravelList travels={filteredTravels} favorites={favorites} addFavorite={addFavorite}/>
            </div>
        );
     }



export default Dashboardpage;