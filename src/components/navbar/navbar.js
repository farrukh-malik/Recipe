import React, { Component } from 'react';
import '../navbar/navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li className="navItem">Home</li>
                        <li className="navItem">Indian Recipe</li>
                        <li className="navItem">English Recipe</li>
                        <li className="navItem">Pakistani Recipe</li>
                        <li className="navItem">Chines Recipe</li>
                        <li className="navItem">About Us</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;