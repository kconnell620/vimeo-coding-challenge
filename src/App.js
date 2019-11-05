import React from 'react';
import './App.css';
import Section from './components/Section';
import Slider from "react-slick";
import Card from './components/Card';


function App() {

  return (
    <div className="App">
      <Section title="Lorem ipsum" 
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      image="https://i.vimeocdn.com/video/590587169_530x315.jpg"
      imageOrientation="Left"
      backgroundColor="white"
>               
      </Section>
      <Section title="Lorem ipsum" 
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      image="https://i.vimeocdn.com/video/589972810_530x315.jpg"
      imageOrientation="Right"
      backgroundColor="#2C2C2C"
      textColor="white"

>               
      </Section>
      <Section title="Lorem ipsum" 
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      image="https://i.vimeocdn.com/video/595198868_505x160.jpg"
      imageOrientation="Left"
      backgroundColor="#939393"
      textColor="white"
>               
      </Section>

      {/* Carousel content  */}
      <Slider className="carousel">
        <Card 
          image="https://upload.wikimedia.org/wikipedia/commons/3/3f/Nichtspassiertplakat_CC.jpg"
          title="Nichts Passiert"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card 
          image="https://cdn.traileraddict.com/content/the-orchard/hunt-for-the-wilderpeople-poster-6.jpg"
          title="Hunt for the Wilder People"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Card 
          image="https://m.media-amazon.com/images/M/MV5BOGVhNjUwYTItYmI2NS00ZGI1LWE5ZDQtMWVjMTIyODAzMDI4XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_.jpg"
          title="Fourth Phase"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
       
      </Slider>

    </div>
  );
}

export default App;
