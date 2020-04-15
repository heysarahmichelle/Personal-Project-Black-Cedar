import React, {Component} from 'react';
import './App.scss';
import Announcement from './components/Home Page/Announcement/Announcement';
import Header from './components/Home Page/Header/Header';
import BottomTabs from './components/Home Page/Header/Bottom Tabs/BottomTabs';
import FeatureCarousel from './components/Home Page/Feature Carousel/FeatureCarousel';
import Video from './components/Home Page/Video/Video';
import FourShopLinks from './components/Home Page/Four Shop Links/FourShopLinks';
import FeaturedCollection from './components/Home Page/Featured Collection/FeaturedCollection';
import Trending from './components/Home Page/Trending/Trending';
import GetToKnowUs from './components/Home Page/Get To Know Us/GetToKnowUs';
import Quotes from './components/Home Page/Quotes/Quotes';
import FromTheBlog from './components/Home Page/From the Blog/FromTheBlog';


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
        <GetToKnowUs />
        <Trending />
        <Quotes />
        <FromTheBlog />


     </div>
    );
  }
}

export default App;
