import { useEffect } from "react";
import { useState } from "react";
import supabase from "../supabase/config";
import "./TravelsCommunity.css";

const TravelsCommunity = () => {
    const [communities, setCommunities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCommunities = async () => {
            try {
                const { data, error } = await supabase
                    .from('community')
                    .select('*');

                if (error) throw error;

                setCommunities(data);
                console.log("data from api ", data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCommunities();
    }, []);

    if (loading) return <p className="community-loading">Cargando...</p>;
    if (error) return <p className="community-error">Error: {error}</p>;

    return (
        <div className="travels-community-container">
            <h1 className="community-header">Community List</h1>
            <div className="community-cards">
                {communities.map((community) => (
                    <div key={community.id} className="community-card">
                        <div className="community-card-header">
                            <span className="community-user">{community.user}</span>
                        </div>
                        <div className="community-card-body">
                            <p className="community-destination">Destination: {community.destination}</p>
                            <p className="community-comment">Comment: {community.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TravelsCommunity;
