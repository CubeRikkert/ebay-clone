import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdvertisementComponent from './components/AdvertisementComponent'
import MainscreenComponent from './components/MainscreenComponent'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AdvertisementDetailComponent from './components/AdvertisementDetailComponent'
import AddAdvertisementComponent from './components/AddAdvertisementComponent'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <main>
            <Route exact path="/" component={MainscreenComponent} />
            <Route exact path="/" component={AdvertisementComponent} />
            <Route exact path="/" component={AdvertisementDetailComponent} />
            <Route exact path="/" component={AddAdvertisementComponent} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
