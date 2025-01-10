import { useState } from "react";
import "./DashboardPage.css"
import TravelList from "../components/travels/TravelList"

function Dashboardpage ({travels, favorites, addFavorite}) {

// CREATION OF FILTER AND SORT
    // 1.1 STATES FOR FILTER
    const [search, setSearch] = useState("");
    const [maxDuration, setMaxDuration] = useState(""); 
    const [showDurationError, setShowDurationError] = useState(false); //used in handleMaxDuration, when the user enters a number that is too big
    const [showPriceError, setShowPriceError] = useState(false);

    const [maxPrice, setMaxPrice] = useState("");

    // 1.1 STATES FOR FILTER
    const [sortOption, setSortOption] = useState("");


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
                setShowDurationError(true);
                setMaxDuration("");
                setTimeout(() => setShowDurationError(false), 4000);  //check the return to see what is displayed as error message
            } else if (value <1 || !Number.isInteger(Number(value))) {
                setMaxDuration("");
            } else { 
                setMaxDuration(value);
            }
    }

    // CREATION FILTER BY PRICE
    // 2. HANDLE FUNCTION   
    const handleMaxPrice = (event) => {

        const value = Number(event.target.value); 

        if (value < 0 || !Number.isInteger(Number(value))) {
            setShowPriceError(true);
            setMaxPrice("");
            setTimeout(()=> setShowPriceError(false), 4000);
        } else if (value <1 || !Number.isInteger(Number(value))) {
            setMaxPrice("");
        } else {
            setMaxPrice(value);
        }
    }

    // 3. UPDATE RESULT  =>  travels.filter().sort()
    const filteredTravels = travels
    .filter((travel)=> {
        const matchesDestination = travel.destination.toLowerCase().includes(search.toLowerCase()); //first filter - destinations that match what we type in the search bar
        const matchesDuration = maxDuration ? travel.duration <= maxDuration : true; // second filter - travels that match the entered duration (or less), when we have a duration (value entered)

        const matchesPrice = maxPrice ? travel.price <= maxPrice : true; 
        return matchesDestination && matchesDuration && matchesPrice; 
    })

    .sort ((a, b) => {
        if (sortOption === "asc") {
            return a.price - b.price;
        } else if (sortOption === "desc") {
            return b.price - a.price;
        }
        return 0;
    });

    //CALCULATION OF HIGHEST DURATION WITHIN THE TRAVELS ARRAY (TO SET AS LIMIT FOR THE SEARCH FIELD BY DURATION)
    const maxAvailableDuration = travels.length ? Math.max(...travels.map((travel) => travel.duration)) : 0;

    //CALCULATION OF HIGHEST PRICE WITHIN THE TRAVELS ARRAY (TO SET AS LIMIT FOR THE SEARCH FIELD BY PRICE)
    const maxAvailablePrice = travels.length ? Math.max(...travels.map((travel)=> travel.price)) : 0;


// CREATION OF SORT    
    return (
           
            <div className="dashboard-container">
                <h2>Travels List</h2>

            {/* FILTER SECTION */}

                <fieldset className="filter-section">
                <legend>Filter by</legend>
                {/* INPUT FOR THE SEARCH OF DESTINATION */}
                <label htmlFor="search-destination" className="filter-label">Destination: </label>
                <input
                    id="search-destination"
                    type="text"
                    placeholder="Search by destination"
                    value={search}
                    onChange={handleSearch}
                    className= "filter-input"
                    />
                
                {/* INPUT FOR THE SEARCH BY DURATION */}
                <label htmlFor="search-duration" className="filter-label">Duration: </label>
                <input
                    id="search-duration"
                    type="number"
                    placeholder={`Up to ${maxAvailableDuration} max days`}
                    value={maxDuration}
                    onChange={handleMaxDuration}
                    min= "1"
                    max={maxAvailableDuration}
                    className="duration-input filter-input" // the field adapts to the potential values (days up to 2 caracters) and therefore the placeholder text is not entirely displayed. In the CSS I will edit this class to make it wider
                />

                {/* INPUT FOR THE SEARCH BY PRICE */}
                <label htmlFor="search-price" className="filter-label">Price: </label>
                <input 
                    id="search-price"
                    type="number"
                    placeholder={`Up to ${maxAvailablePrice} max price (€)`}
                    value = {maxPrice}
                    onChange = {handleMaxPrice}
                    min ="1"
                    max = {maxAvailablePrice}
                    className="price-input filter-input"

                    />
                </fieldset>

                {/* ERROR MESSAGE */}
                {showDurationError && (<p style = {{color:"red"}}>
                    Duration must be at least 1 day, maximum allowed duration is {maxAvailableDuration} days.
                </p>
                )}

                {showPriceError && (<p style = {{color:"red"}}>
                    Price must be a positive number, maximum allowed price is {maxAvailablePrice} €.
                </p>
                )}
            
            {/* SORT SECTION */}
            <fieldset className="sort-section">
                <legend>Sort by</legend>
                {/* INPUT TO ORDER BY PRICE */}
                <label htmlFor="sort-price" className="filter-label">Price: </label>
                <select
                    id="sort-price"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className= "sort-input"
                    > 

                    <option value="">Select</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </fieldset>


<div className="travel-list-container">
                <TravelList travels={filteredTravels} favorites={favorites} addFavorite={addFavorite}/>
            </div>
            </div>
        );
     }



export default Dashboardpage;