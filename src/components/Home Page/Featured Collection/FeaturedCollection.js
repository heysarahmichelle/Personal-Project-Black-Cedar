import React, { Component } from 'react';
import './featuredCollection.scss';

class FeaturedCollection extends Component {
    render() {
        return (
            <div className="featured-collection-component">
                <h1>
                    FEATURED COLLECTION
                </h1>
                <h3>
                    SS20 WILDFLOWER COLLECTION
                </h3>

                <div className="featured-photos">
                    <section className="feature-one">
                        <section className="rectangle-one">
                        </section>
                        <p className="product-name">THE BLACK BEAR</p>
                        <p className="product-price">$199.99</p>
                    </section>

                    <section className="feature-two">
                        <section className="rectangle-two">
                        </section>
                        <p className="product-name">THE MAMA BEAR</p>
                        <p className="product-price">$299.99</p>
                    </section>

                    <section className="feature-three">
                        <section className="rectangle-three">
                        </section>
                        <p className="product-name">THE POLAR BEAR</p>
                        <p className="product-price">$299.99</p>
                    </section>

                    <section className="feature-four">
                        <section className="rectangle-four">
                        </section>
                        <p className="product-name">THE GRIZZLY BEAR</p>
                        <p className="product-price">$399.99</p>
                    </section>
                </div>
                <button className="view-button">VIEW SS20 COLLECTION</button>
            </div>
        )
    }
}

export default FeaturedCollection;