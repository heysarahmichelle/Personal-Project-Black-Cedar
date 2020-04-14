import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Announcement from './components/Announcement/Announcement';
import FeatureCarousel from './components/Feature Carousel/FeatureCarousel';
import Video from './components/Video/Video';
import BottomTabs from './components/Header/Bottom Tabs/BottomTabs';
import styled from 'styled-components';




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
        <BottomTabs />
        <FeatureCarousel />
        <Video />


     </div>
    );
  }
}

export default App;
