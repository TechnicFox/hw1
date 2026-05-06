import CityCard from './components/CityCard';
import Gallery from './components/Gallery';
import Facts from './components/Facts';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Kyiv</h1>
      <CityCard />
      <Gallery />
      <Facts />
    </div>
  );
}

export default App
