import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import NavBar from './component/layout/NavBar';
import Footer from './component/layout/Footer';
import Landing from './component/home/Landing';
import store from './store';
import { HashRouter as Router, Route } from 'react-router-dom';
import Movie from './component/home/Movie';

class App extends Component{
  render(){
    return(
      <Provider store={store}>     
      <Router>
        <div>
          <NavBar/>  
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Footer/>  
        </div>

      </Router> 
      
      </Provider> 
  
    );
  }
}

export default App;
