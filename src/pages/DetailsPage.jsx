import { useState } from "react";
import { useEffect } from "react";
import supabase from "../supabase/config";
// import { useParams } from "react-router-dom";
 


const DetailsPage = () => {

const [trip, setTrip] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);



useEffect(() => {
    const fetchTravels = async () => {

        try {
            const { data, error } = await supabase
            .from('travels')
            .select('*')
            // .eq('id', )

        if (error) throw error;

        setTrip(data);
        console.log( "data from api", data);

        } catch (err){
            setError(err.message);
        } finally {setLoading(false);

        }
    };

    fetchTravels();
}, []);


if (loading) return <p className="details-loading">Cargando...</p>;
if (error) return <p className="details-error">Error: {error}</p>;


return(






)



}



















export default DetailsPage