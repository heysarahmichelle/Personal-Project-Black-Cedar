import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Announcement from './components/Announcement/Announcement';
import FeatureCarousel from './components/Feature Carousel/FeatureCarousel';
import Video from './components/Video/Video';


class App extends Component {
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return (
      <div className="App">
        <Announcement />
        <Header />
        <FeatureCarousel />
        <Video />


     </div>
    );
  }
}

export default App;
