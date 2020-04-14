import React from 'react';
import './featureCarousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;

const Page = styled.div`
    width: 100%;
`;



export default class FeatureCarousel extends React.Component {
    render(){
        return(
            <Wrapper className="feature-carousel-component">
                <Slider
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={false}
                    dots={true}
                >
                    <Page>
                        <img 
                        src="https://previews.123rf.com/images/karimpard/karimpard1901/karimpard190100050/119592203-beauty-asian-woman-backpack-traveler-at-beautiful-place.jpg" 
                        alt="Asian woman wearing backpack" 
                        height="100vh"
                        width="500px"></img>
                    </Page>
                    <Page>
                        <img 
                        src="https://i.pinimg.com/originals/ca/a0/31/caa0312b3be4e2d9287494256034b662.jpg"
                        alt="Woman with backpack"
                        height="100vh"
                        width="500px"></img>
                    </Page>
                    <Page>Page Three</Page>
                    <Page>Page Four</Page>
                </Slider>
            </Wrapper>
        );
    }
}
