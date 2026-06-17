import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import './App.css';

function App() {
  return (
    <main className="app">
      <Header>
        <Navigation />
      </Header>

      <Welcome />
      <Article />
    </main>
  );
}

export default App;
