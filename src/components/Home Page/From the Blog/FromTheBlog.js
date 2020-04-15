import React, { Component } from 'react';
import './fromTheBlog.scss';

class FromTheBlog extends Component {
    render() {
        return (
            <div className="from-the-blog-component">
                <h1>
                    FROM THE BLOG
                </h1>

                <div className="blog-photos">
                    <section className="blurb-one">
                        <section className="blurb-photo-one">
                        </section>
                        <p className="meet-name">MEET THE WOMEN</p>
                        <p className="blurb-about">For our #WeAreWeCan campaign, we sat down with Syndey Burrington to hear her story. When she discovered she was unexpectedly pregnant wi...</p>
                        <p className="read-more">READ MORE</p>
                    </section>

                    <section className="blurb-two">
                        <section className="blurb-photo-two">
                        </section>
                        <p className="meet-name">QUARANTINE TIPS</p>
                        <p className="blurb-about">For our #WeAreWeCan campaign, we sat down with Leandra Ale-Marheine, age 33, to hear her story. After becoming a new mom, Leandra struggled with th...</p>
                        <p className="read-more">READ MORE</p>
                    </section>

                    <section className="blurb-three">
                        <section className="blurb-photo-three">
                        </section>
                        <p className="meet-name">AT HOME IDEAS</p>
                        <p className="blurb-about">Between homeschooling our children, working from home, and trying to keep our family happy while stuck indoors for the next 30 days, you might be ...</p>
                        <p className="read-more">READ MORE</p>
                    </section>
                </div>
                <button className="view-all-button">VIEW ALL</button>
            </div>
        )
    }
}

export default FromTheBlog;