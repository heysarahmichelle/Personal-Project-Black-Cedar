import React, {Component} from 'react';
import './App.scss';
import Announcement from './components/Announcement/Announcement';
import Header from './components/Header/Header';
import BottomTabs from './components/Header/Bottom Tabs/BottomTabs';
import FeatureCarousel from './components/Feature Carousel/FeatureCarousel';
import Video from './components/Video/Video';
import FourShopLinks from './components/Four Shop Links/FourShopLinks';
import FeaturedCollection from './components/Featured Collection/FeaturedCollection';
import Trending from './components/Trending/Trending';



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
        <FourShopLinks />
        <FeaturedCollection />
        <Trending />


     </div>
    );
  }
}

export default App;
