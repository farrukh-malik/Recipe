import React, { Component } from 'react';
import '../header/header.css';
import logo from '../../images//Ghar-ka-khana.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <header>
                    <img src={logo} alt="logo" id="logo" />
                    {/* <img src="images//Ghar-ka-khana.png " alt="logo" id="logo"/> */}
                    <h1 id="companyName">Ghr Ka Khana [Resturent]</h1>
                    {/* <input type="search" placeholder="Search Recipe" className="search"> */}
                    <input type="search" placeholder="Search Recipe" className="search"></input>
                    {/* <input type="button" value="Search" class="search">  */}
                    <input type="button" value="Search" className="search"></input>

                </header>
            </div>
        );
    }
}

export default Header;