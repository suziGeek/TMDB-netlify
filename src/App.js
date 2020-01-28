import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import MainMovie from "./components/MainMovie";
import MovieDetail from "./components/MovieDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header text='My Movie App' />
          <Route exact path='/' component={MainMovie} />
          <Route path='/:MovieId' component={MovieDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
