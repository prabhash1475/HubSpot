
import './App.css';
import { Abovenavbar } from './components/Abovenavbar';
import { Belownavbar } from './components/Belownavbar';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Abovenavbar />
      <Navbar />
      <Belownavbar />
    </div>
  );
}

export default App;
