
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './componente/Navbar';
import Home from './componente/Home';
import About from './componente/About'
import NotesState from './context/notes/NoteState';
import Alert from './componente/Alert';

function App() {
  return (
    <>
      <NotesState>
      <Router>
      <Navbar/>
      <Alert message="this is alert"/>
      <div className="container">

      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>      
        </Switch>
        </div>
    </Router>
    </NotesState>
    </>
  );
}

export default App;
