import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/config.js";


function CreatedDetailsPage() {

const { id } = useParams();
const [ createdTravel, setCreatedTravel] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
    const fetchMyTrip = async () => {
        setLoading(true);

        const { data, error } = await supabase
        .from("mytrips","favs")
        .select("*")
        .eq("id", id)
        .single();

        if (error) {
            console.error("Error fetching travel:", error.message);
            setError("travel not found");
        } else {
            setCreatedTravel(data);
        }
        setLoading(false);
    };

    fetchMyTrip();
}, [id]);


if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;



    return (
        <div className="created-details-page">
            <h2>Details for {createdTravel.destination}</h2>
            <img src={createdTravel.image} alt={createdTravel.destination} className="travel-image" />
            <p><strong>Description:</strong> {createdTravel.description}</p>
            <p><strong>Price:</strong> €{createdTravel.price}</p>
            <p><strong>Start Date:</strong> {createdTravel.start_date}</p>
            <p><strong>End Date:</strong> {createdTravel.end_date}</p>
        </div>
    );

}


export default CreatedDetailsPage;