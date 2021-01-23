import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
import Home from './components/pages/Home'  
import Navbar from './components/components/Navbar'
import Footer from './components/components/Footer';

function App() {
  return (
    <Scrollbars style={{ width: '100%', minHeight: '100vh'}}>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
    </Scrollbars>
  );
}

export default App;