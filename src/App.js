import Nav from './components/Nav/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Spacex from './components/pages/Spacex';
import Upcoming from './components/pages/upcoming';
import AllRockets from './components/pages/Allrockets';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/spacex" component={Spacex} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/allrockets" component={AllRockets} />
        </Switch>

      </div>

    </Router>

  );
}

export default App;
