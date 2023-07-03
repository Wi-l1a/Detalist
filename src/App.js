import React from 'react';
import Header from './components/header';
import './App.css'
import Home from './home';
const App = () => {
  return (
    <>
    <Header/>
    <main>
      <Home/>
    </main>
    </>
  );
};

export default App;