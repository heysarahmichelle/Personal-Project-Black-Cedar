import React, { Component } from 'react';
import './shop.scss';
import Announcement from '../Home Page/Announcement/Announcement';
import Header from '../Home Page/Header/Header';
import BottomTabs from '../Home Page/Header/Bottom Tabs/BottomTabs';
import ContactUs from '../Home Page/Contact Us/ContactUs';


class Shop extends Component {
    render() {
        return (
            <div className="shop-component">
                <Announcement />
                <Header />
                <BottomTabs />
                <h1>
                    ALL
                </h1>
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
                        <p className="product-name">THE BABY BEAR</p>
                        <p className="product-price">$299.99</p>
                    </section>

                    <section className="feature-four">
                        <section className="rectangle-four">
                        </section>
                        <p className="product-name">THE GRIZZLY BEAR</p>
                        <p className="product-price">$399.99</p>
                    </section>
                </div>
                <div className="featured-photos">
                    <section className="feature-one">
                        <section className="rectangle-one">
                        </section>
                        <p className="product-name">THE KODIAK CAR KIT</p>
                        <p className="product-price">$199.99</p>
                    </section>

                    <section className="feature-two">
                        <section className="rectangle-two">
                        </section>
                        <p className="product-name">THE KOALA BEAR</p>
                        <p className="product-price">$299.99</p>
                    </section>

                    <section className="feature-three">
                        <section className="rectangle-three">
                        </section>
                        <p className="product-name">THE PANDA BEAR</p>
                        <p className="product-price">$299.99</p>
                    </section>

                    <section className="feature-four">
                        <section className="rectangle-four">
                        </section>
                        <p className="product-name">THE ANDEAN BEAR</p>
                        <p className="product-price">$399.99</p>
                    </section>
                </div>
                <div className="featured-photos">
                    <section className="feature-one">
                        <section className="rectangle-one">
                        </section>
                        <p className="product-name">THE ASIATIC BLACK BEAR</p>
                        <p className="product-price">$199.99</p>
                    </section>

                    <section className="feature-two">
                        <section className="rectangle-two">
                        </section>
                        <p className="product-name">THE SLOTH BEAR</p>
                        <p className="product-price">$299.99</p>
                    </section>

                    <section className="feature-three">
                        <section className="rectangle-three">
                        </section>
                        <p className="product-name">THE SUN BEAR</p>
                        <p className="product-price">$299.99</p>
                    </section>

                    <section className="feature-four">
                        <section className="rectangle-four">
                        </section>
                        <p className="product-name">THE SHORT-FACED BEAR</p>
                        <p className="product-price">$399.99</p>
                    </section>
                </div>
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
                <ContactUs />
            </div>
        )
    }
}

export default Shop;