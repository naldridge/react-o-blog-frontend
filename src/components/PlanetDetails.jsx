import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PlanetDetails = ({ planetList }) => {
    const { planet_slug } = useParams();
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        (async () => {
            const url = `http://localhost:3333/planet/${planet_slug}`;
            const planet = await fetch(url).then((response) => response.json());
            setPlanet(planet);
        })();
    }, [setPlanet, planet_slug]);

    return (
        <div className="PlanetDeets">
            <h1>{planet.name} Information:</h1>
            <p>
                Location: {planet.location}
            </p>
            <p>
                Description: {planet.description}
            </p>
        </div>
    );
}

export default PlanetDetails;