import React from 'react';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Team from './components/team';
import Research from './components/research';
import Insights from './components/insights';
import Ideas from './components/ideas';
import Concepts from './components/concepts';
import MainConcept from './components/main-concept';
import DesignGuidelines from './components/design-guidelines';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Team />
      <Research />
      <Insights />
      <Ideas />
      <Concepts />
      <MainConcept />
      <DesignGuidelines />
      <Footer />
    </div>
  );
}

export default App;
