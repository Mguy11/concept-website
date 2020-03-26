import React from 'react';
import './styles/style.scss';
import Navigation from './components/navigation';
import Header from './components/header';
import Footer from './components/footer';
import ContentBlock from './components/contentBlock';
import ConceptBlock from './components/conceptBlock';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <ContentBlock
          title = "Social Cooling"
          subtitle = "Probleemstelling"
          body= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies neque sit amet dolor consectetur, quis suscipit ex vulputate. Quisque hendrerit accumsan leo, sit amet posuere risus finibus quis. Quisque porta rhoncus luctus. Aliquam lacinia est at fermentum sollicitudin. Morbi non cursus magna, ut accumsan magna. Maecenas eget porttitor metus. Nam quis viverra tortor.

          Praesent vulputate orci sit amet justo molestie, sed ornare dui mollis. In feugiat mi eget nisi dictum egestas. Etiam scelerisque laoreet eros vitae elementum. Phasellus mauris neque, tincidunt eget dictum ac, facilisis at orci. Donec velit lectus, porta a mollis tempus, convallis sed lorem. Fusce ac suscipit lorem. Praesent sit amet iaculis magna, auctor placerat dui. Mauris hendrerit, lectus convallis lobortis euismod, purus mi finibus sem, sed aliquam massa erat quis nisl. Aliquam sed felis fringilla, venenatis libero et, porttitor odio. Duis quis dui id ante dignissim sollicitudin. Mauris tempor, diam id lacinia imperdiet, tortor mi blandit magna, at tempus odio nisi sit amet nibh. Etiam turpis arcu, rhoncus eu sem sed, rhoncus mattis erat. Nunc mollis a lectus quis viverra. Fusce eget orci dictum felis tincidunt pellentesque eu sed sapien. Sed gravida, nulla eget consectetur porta, massa mi porta mi, et volutpat metus lorem vitae nulla.
          
          Sed mauris lectus, iaculis luctus tortor a, lobortis vulputate metus. Nullam sodales, ante ut placerat pulvinar, libero metus rutrum massa, et accumsan dui orci non ligula. Vestibulum tempor ipsum non enim facilisis, eu scelerisque metus vehicula. Nam quis nisl quis arcu maximus tempus. Sed ut aliquam velit. Maecenas nibh diam, auctor ac consequat eu, volutpat ac metus. Ut venenatis consequat ipsum, nec euismod massa ultricies id. Proin suscipit lacus sed orci tristique, vel condimentum urna lobortis. Etiam pulvinar laoreet fermentum."
        />
        <ConceptBlock />
        <ContentBlock
          title = "Grab that cookie"
          subtitle = "Hoofdconcept"
          body= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies neque sit amet dolor consectetur, quis suscipit ex vulputate. Quisque hendrerit accumsan leo, sit amet posuere risus finibus quis. Quisque porta rhoncus luctus. Aliquam lacinia est at fermentum sollicitudin. Morbi non cursus magna, ut accumsan magna. Maecenas eget porttitor metus. Nam quis viverra tortor.

          Praesent vulputate orci sit amet justo molestie, sed ornare dui mollis. In feugiat mi eget nisi dictum egestas. Etiam scelerisque laoreet eros vitae elementum. Phasellus mauris neque, tincidunt eget dictum ac, facilisis at orci. Donec velit lectus, porta a mollis tempus, convallis sed lorem. Fusce ac suscipit lorem. Praesent sit amet iaculis magna, auctor placerat dui. Mauris hendrerit, lectus convallis lobortis euismod, purus mi finibus sem, sed aliquam massa erat quis nisl. Aliquam sed felis fringilla, venenatis libero et, porttitor odio. Duis quis dui id ante dignissim sollicitudin. Mauris tempor, diam id lacinia imperdiet, tortor mi blandit magna, at tempus odio nisi sit amet nibh. Etiam turpis arcu, rhoncus eu sem sed, rhoncus mattis erat. Nunc mollis a lectus quis viverra. Fusce eget orci dictum felis tincidunt pellentesque eu sed sapien. Sed gravida, nulla eget consectetur porta, massa mi porta mi, et volutpat metus lorem vitae nulla.
          
          Sed mauris lectus, iaculis luctus tortor a, lobortis vulputate metus. Nullam sodales, ante ut placerat pulvinar, libero metus rutrum massa, et accumsan dui orci non ligula. Vestibulum tempor ipsum non enim facilisis, eu scelerisque metus vehicula. Nam quis nisl quis arcu maximus tempus. Sed ut aliquam velit. Maecenas nibh diam, auctor ac consequat eu, volutpat ac metus. Ut venenatis consequat ipsum, nec euismod massa ultricies id. Proin suscipit lacus sed orci tristique, vel condimentum urna lobortis. Etiam pulvinar laoreet fermentum."
        />
        <ConceptBlock />
        <ContentBlock
          title = "Ontwerpproces"
          subtitle = "Hoofdconcept"
          body= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies neque sit amet dolor consectetur, quis suscipit ex vulputate. Quisque hendrerit accumsan leo, sit amet posuere risus finibus quis. Quisque porta rhoncus luctus. Aliquam lacinia est at fermentum sollicitudin. Morbi non cursus magna, ut accumsan magna. Maecenas eget porttitor metus. Nam quis viverra tortor.

          Praesent vulputate orci sit amet justo molestie, sed ornare dui mollis. In feugiat mi eget nisi dictum egestas. Etiam scelerisque laoreet eros vitae elementum. Phasellus mauris neque, tincidunt eget dictum ac, facilisis at orci. Donec velit lectus, porta a mollis tempus, convallis sed lorem. Fusce ac suscipit lorem. Praesent sit amet iaculis magna, auctor placerat dui. Mauris hendrerit, lectus convallis lobortis euismod, purus mi finibus sem, sed aliquam massa erat quis nisl. Aliquam sed felis fringilla, venenatis libero et, porttitor odio. Duis quis dui id ante dignissim sollicitudin. Mauris tempor, diam id lacinia imperdiet, tortor mi blandit magna, at tempus odio nisi sit amet nibh. Etiam turpis arcu, rhoncus eu sem sed, rhoncus mattis erat. Nunc mollis a lectus quis viverra. Fusce eget orci dictum felis tincidunt pellentesque eu sed sapien. Sed gravida, nulla eget consectetur porta, massa mi porta mi, et volutpat metus lorem vitae nulla.
          
          Sed mauris lectus, iaculis luctus tortor a, lobortis vulputate metus. Nullam sodales, ante ut placerat pulvinar, libero metus rutrum massa, et accumsan dui orci non ligula. Vestibulum tempor ipsum non enim facilisis, eu scelerisque metus vehicula. Nam quis nisl quis arcu maximus tempus. Sed ut aliquam velit. Maecenas nibh diam, auctor ac consequat eu, volutpat ac metus. Ut venenatis consequat ipsum, nec euismod massa ultricies id. Proin suscipit lacus sed orci tristique, vel condimentum urna lobortis. Etiam pulvinar laoreet fermentum."
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
