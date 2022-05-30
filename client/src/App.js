import CovatarsGameContainer from './containers/CovatarsGameContainer';
import './App.css';
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom"
import PlayerCreation from './containers/PlayerCreation';
import PlayerTurn from './containers/PlayerTurn';


function App() {
  return (
    <>
      <Router>
        <navbar>
          <Link to="/">Home</Link>
          <Link to="/playerTurn">Player Turn</Link>
        </navbar>
          
       
          <Routes>
            <Route 
              path="/" 
              element={<PlayerCreation/>}
            /> 
            <Route 
              path="/playerTurn" element={<PlayerTurn/>}
            />
          </Routes>
        
        
      </Router>
      {/* <CovatarsGameContainer /> */}
    </>
  );
}

export default App;