import { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import PlanetDetails from "./PlanetDetails";


const PlanetList = () => {
    const [planets, setPlanets] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const planets = await _fetchPlanets();
            setPlanets(planets)
        })();
    }, [setPlanets]);

    const _fetchPlanets = async () => {
        const url = 'http://127.0.0.1:3333';
        const response = await fetch(url).then(response => response.json());
        return response;
    }

    return (
        <div className="Planets">
            {!!planets.length ? (
                <>
                    <Route exact path='/'>
                        <ul className="PlanetList">
                            {planets.map((planet, index) => (
                                <li key={index}>
                                    <Link to={`/planet/${planet.slug}`}>
                                        {planet.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Route>
                    <Route path='/planet/:planet_slug'>
                        <button type='button' onClick={() => history.goBack()}>Home</button>
                        <PlanetDetails planetList={planets} />
                    </Route>
                </>
            ) : (
                <h2>Loading Planets from API...</h2>
            )}
        </div>
    );
}

export default PlanetList;
