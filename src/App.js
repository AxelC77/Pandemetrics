import React from 'react';
import NavigationBar from './components/NavigationBar';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import CovidInfo from './pages/CovidInfo';
import About from './pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return <div className="App">
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" exact component={Home} />
        <Route path="/covidinfo" exact component={CovidInfo} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  </div>;
}

export default App;
