import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home';
import About from './About';
import Emails, { SingleEmail } from './Emails';
import './App.css';

const test = ({ match: { url, params: { emailID } } }) => (
  <h1>{ emailID ? emailID : url }</h1>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/emails">Emails</Link>
            </nav>
          </header>
          <main className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/emails" component={Emails} />
            <Route path="/emails/:emailID" component={SingleEmail} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;