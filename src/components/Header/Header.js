import React, {Component} from 'react';
import './header.scss';




class Header extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className= "header-component">
                <section className="company-info-component">
                    <section className= "company-name">
                        <p>BLACK CEDAR</p>
                    </section>
                
                    <section className="account-component">
                        <section className="account-search-cart">
                            <p>ACCOUNT </p>
                            <p>SEARCH </p>
                            <section className="cart">CART(0)</section>
                        </section>
                    </section>
                </section>


            </div>
        )
    }
}

export default Header;