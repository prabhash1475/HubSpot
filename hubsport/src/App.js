
import './App.css';
import { Abovenavbar } from './components/Abovenavbar';
import { Belownavbar } from './components/Belownavbar';
// import Login from './components/Login';
import { Navbar } from './components/Navbar';
import AllRoutes from './Route/AllRoutes';
// import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      {/* <Abovenavbar /> */}
      <Navbar />
      {/* <Belownavbar /> */}
      <AllRoutes />

    </div>
  );
}

export default App;
