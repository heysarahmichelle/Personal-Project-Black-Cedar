import React, { Component } from 'react';
import './bottomTabs.scss';
import Shop from './Shop/Shop';
import Blog from './Blog/Blog';
import Help from './Help/Help';
import WhereWeCan from './Where We Can/WhereWeCan';
import Outlet from './Outlet/Outlet';
import Rewards from './Rewards/Rewards';

class BottomTabs extends Component {
    render() {
        return (
            <div className="bottom-tabs-component">
                 <section className="bottom-tabs">
                    <section className= "company-tabs">
                        <p className="shop">SHOP </p>
                        <p>BLOG </p>
                        <p>HELP </p>
                        <p>#WHEREWECAN </p>
                        <p>OUTLET </p>
                        <p>REWARDS </p>
                    </section>
                </section>
            </div>
        )
    }
}

export default BottomTabs;
