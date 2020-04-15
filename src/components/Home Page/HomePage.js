import React, { Component } from 'react';
import './homePage.scss';
import Announcement from './Announcement/Announcement';
import Header from './Header/Header';
import BottomTabs from './Header/Bottom Tabs/BottomTabs';
import FeatureCarousel from './Feature Carousel/FeatureCarousel';
import Video from './Video/Video';
import FourShopLinks from './Four Shop Links/FourShopLinks';
import FeaturedCollection from './Featured Collection/FeaturedCollection';
import Trending from './Trending/Trending';
import GetToKnowUs from './Get To Know Us/GetToKnowUs';
import Quotes from './Quotes/Quotes';
import FromTheBlog from './From the Blog/FromTheBlog';
import ContactUs from './Contact Us/ContactUs';



class HomePage extends Component {
    render() {
        return (
                <div className="homepage">
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
                    <ContactUs />
                </div>
        )
    }
}

export default HomePage;
