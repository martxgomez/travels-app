import { useState } from "react";
import "./DashboardPage.css"
import TravelList from "../components/travels/TravelList"

function Dashboardpage ({travels, favorites, addFavorite}) {

    // 1. STATE
    const [search, setSearch] = useState("");
    const [maxDuration, setMaxDuration] = useState(""); 
    const [showError, setShowError] = useState(false); //used in handleMaxDuration, when the user enters a number that is too big

    // CREATION FILTER BY DESTINATION (SEARCH FIELD BY TYPING)
    // 2. HANDLE FUNCTION
        const handleSearch = (event) => {
            setSearch(event.target.value);
        };

    // CREATION FILTER BY DURATION (DAYS)
    // 2. HANDLE FUNCTION
    const handleMaxDuration = (event) => {
            /* setMaxDuration(event.target.value);  - - - edited with the lines that follow, to integrate the limit of number to be entered */
           
            const value = Number(event.target.value); //converts strings (values are strings) in numbers

            if (value > maxAvailableDuration || !Number.isInteger(Number(value))) { //with second condition, we check if the value entered (and converted in number) is an integer
                setShowError(true);
                setMaxDuration("");
                setTimeout(() => setShowError(false), 3000);  //check the return to see what is displayed as error message
            } else if (value <1 || !Number.isInteger(Number(value))) {
                setMaxDuration("");
            } else { 
                setMaxDuration(value);
            }
    }

    // 3. UPDATE RESULT
    const filteredTravels = travels.filter((travel)=> {
        const matchesDestination = travel.destination.toLowerCase().includes(search.toLowerCase()); //first filter - destinations that match what we type in the search bar
        const matchesDuration = maxDuration ? travel.duration <= maxDuration : true; // second filter - travels that match the entered duration (or less), when we have a duration (value entered)

        return matchesDestination && matchesDuration; 
});

    //CALCULATION OF HIGHEST DURATION WITHIN THE TRAVELS ARRAY (TO SET AS LIMIT FOR THE SEARCH FIELD BY DURATION)
    const maxAvailableDuration = travels.length ? Math.max(...travels.map((travel) => travel.duration)) : 0;
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
                    placeholder={`Up to ${maxAvailableDuration} max days`}
                    value={maxDuration}
                    onChange={handleMaxDuration}
                    min= "2"
                    max={maxAvailableDuration}
                />

                {/* ERROR MESSAGE */}
                {showError && (<p style = {{color:"red"}}>
                    Duration must be at least 1 day, maximum allowed duration is {maxAvailableDuration} days.
                </p>
                )}


                <TravelList travels={filteredTravels} favorites={favorites} addFavorite={addFavorite}/>
            </div>
        );
     }



export default Dashboardpage;