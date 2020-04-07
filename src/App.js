import React from 'react';
import Header from './components/header';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './components/team';
import Research from './components/research';
import Insights from './components/insights';
import Ideas from './components/ideas';

function App() {
  return (
    <div className="App">
      <Header />
      <Team />
      <Research />
      <Insights />
      <Ideas />
    </div>
  );
}

export default App;
