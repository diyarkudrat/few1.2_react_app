import React from 'react';
import './App.css';
import Title from './components/Title';
import Footer from './components/Footer';
import POPOSList from './components/POPOSList';
import POPOSDetails from './components/POPOSDetails';
import About from './pages/About';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Title />
          <Route exact path="/" component={POPOSList} />
          <Route exact path="/about" component={About} />
          <Route path="/details/:id" component={POPOSDetails} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
