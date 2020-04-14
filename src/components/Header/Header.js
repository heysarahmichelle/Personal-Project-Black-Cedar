import React, {Component} from 'react';
import './header.scss';
import Shop from './Shop/Shop';
import Blog from './Blog/Blog';
import Help from './Help/Help';
import WhereWeCan from './Where We Can/WhereWeCan';
import Outlet from './Outlet/Outlet';
import Rewards from './Rewards/Rewards';



class Header extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className= "header-component">
                
                <section className= "company-name">
                    <p>BLACK CEDAR</p>
                </section>
                <section className="bottom-tabs">
                    <section className= "company-tabs">
                        <p>SHOP </p>
                        <p>BLOG </p>
                        <p>HELP </p>
                        <p>#WhereWeCan </p>
                        <p>OUTLET </p>
                        <p>REWARDS </p>
                    </section>
                </section>
                <section className="account-search-cart">

                </section>


            </div>
        )
    }
}

export default Header;