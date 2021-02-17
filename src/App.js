import React from 'react';
import './App.css';
import Title from './components/Title';
import Footer from './components/Footer';
import POPOSList from './components/POPOSList';

function App() {
  return (
    <div className="App">
        <Title />
        <POPOSList />
        <Footer />
    </div>
  );
}

export default App;
