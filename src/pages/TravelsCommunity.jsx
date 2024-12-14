import { useEffect } from "react";
import { useState } from "react";
import supabase from "../supabase/config";
import "./TravelsCommunity.css"


const TravelsCommunity = () => {
    const [communities, setCommunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchCommunities = async () => {
            try {
                const { data, error } = await supabase
                    .from('community')
                    .select('*')
                  

                if (error) throw error;

              setCommunities(data)
                console.log("data from api ", data)
            } catch (err) {
                setError(err.message);

            } finally {
                setLoading(false);
            }
        };

        fetchCommunities();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: { error } </p>;



    return (

  <div>
    <h1>Community List </h1>
    <ul>
    
        {communities.map((community) => (
          <li key={community.id}>
             {community.user}: {community.destination} {community.comment}
        </li>
       ))}
    </ul>
 </div>
 );

};







export default TravelsCommunity;