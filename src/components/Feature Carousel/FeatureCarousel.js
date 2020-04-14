import React from 'react';
import './featureCarousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';



export default class FeatureCarousel extends React.Component {
    render(){
        return(
            <div className="feature-carousel-component">
                Photo Carousel
            </div>
        );
    }
}
