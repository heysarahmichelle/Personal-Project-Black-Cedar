import React, { Component } from 'react';
import './fourShopLinks.scss';

class FourShopLinks extends Component {
    render() {
        return (
            <div className="shoplinks-components">
                <section className="shoplinks-indv-components">
                    <section className="rectangle-1">
                        <h3>MOTHERHOOD</h3>
                        <p>COLLECTION</p>
                        <button>SHOP</button>
                    </section>
                    <section className="rectangle-2">
                        <h3>TRAVEL</h3>
                        <p>COLLECTION</p>
                        <button>SHOP</button>
                    </section>
                    <section className="rectangle-3">
                        <h3>LIFESTYLE</h3>
                        <p>COLLECTION</p>
                        <button>SHOP</button>
                    </section>
                    <section className="rectangle-4">
                        <h3>PROFESSIONAL</h3>
                        <p>COLLECTION</p>
                        <button>SHOP</button>
                    </section>
                </section>
            </div>
        )
    }
}

export default FourShopLinks;