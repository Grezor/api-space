import Nav from './components/Nav/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Spacex from './components/pages/Spacex';
import Upcoming from './components/pages/upcoming';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/spacex" component={Spacex} />
          <Route path="/upcoming" component={Upcoming} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
