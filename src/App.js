import './App.css';
import Card from './components/Card';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Filter />
      <Card />
    </div>
  );
}

export default App;
