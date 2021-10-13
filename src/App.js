import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainContainer from './layout/MainContainer/MainContainer';
import NavBar from './layout/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <MainContainer />
      </div>
    </Router>
  );
}

export default App;
