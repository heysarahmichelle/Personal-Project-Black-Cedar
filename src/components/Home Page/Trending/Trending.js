import React, { Component } from 'react';
import './trending.scss';

class Trending extends Component {
    render() {
        return (
            <div className="trending-collection-component">
                <h1>
                    SEE WHAT IS TRENDING
                </h1>
                <h3>
                    BEST SELLERS
                </h3>

                <div className="trending-photos">
                    <section className="trend-one">
                        <section className="rectangle-one">
                        </section>
                        <p className="product-name">THE BLACK BEAR</p>
                        <p className="product-price">$199.99</p>
                    </section>

                    <section className="trend-two">
                        <section className="rectangle-two">
                        </section>
                        <p className="product-name">THE BABY BEAR</p>
                        <p className="product-price">$159.99</p>
                    </section>

                    <section className="trend-three">
                        <section className="rectangle-three">
                        </section>
                        <p className="product-name">THE KODIAK CAR KIT</p>
                        <p className="product-price">$159.99</p>
                    </section>

                    <section className="trend-four">
                        <section className="rectangle-four">
                        </section>
                        <p className="product-name">THE GRIZZLY BEAR</p>
                        <p className="product-price">$399.99</p>
                    </section>
                </div>
                <button className="trend-view-button">SHOP TRENDS</button>
            </div>
        )
    }
}

export default Trending;