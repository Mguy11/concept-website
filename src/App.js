import React from 'react';
import './styles/style.scss';
import Navigation from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
import ContentBlock from './components/contentBlock';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <ContentBlock
          title = "Social Cooling"
          subtitle = "Probleemstelling"
          body= "Lorem Ipsum Dolor Sit amet"
        />
        <ContentBlock
          title = "Grab that cookie"
          subtitle = "Hoofdconcept"
          body= "Lorem Ipsum Dolor Sit amet"
        />
        <ContentBlock
          title = "Ontwerpproces"
          subtitle = "Hoofdconcept"
          body= "Lorem Ipsum Dolor Sit amet"
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
