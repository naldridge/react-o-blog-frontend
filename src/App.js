import { BrowserRouter as Router } from 'react-router-dom';
import PlanetList from './components/PlanetList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Star Wars RPG Companion</h1>
      <h1>Planets</h1>
      <Router>
        <PlanetList />
      </Router>

    </div>
  );
}

export default App;
