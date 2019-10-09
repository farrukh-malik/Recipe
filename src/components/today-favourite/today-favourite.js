import React, { Component } from 'react';
import '../today-favourite/today-favourite.css';
import chickenHaleem from '../../images//chicken-haleem.jpg';
// import chickenHaleem from '../images/chicken-haleem.jpg';

class TodayFavourite extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <section>
                    <img src={chickenHaleem} alt="Chiken Haleem" id="haleemImg" />
                    {/* <img src="images//chicken-haleem.jpg" alt="Chiken Haleem" id="haleemImg"> */}
                    <h1>Chicken Haleem</h1>
                    <hr />
                    <p>Haleem is a delicious delicacy of Pakistani cuisine. Here is a delicious Chicken Haleem to feed your family and guest. Great with Julian ginger, crispy fried onion and green chili along hot naan.</p>
                    <h5>Recipe By: Chef Zakir</h5>
                    <h5>Viewed: 2065 </h5>
                    <h3>Rate It: </h3>
                    <input type="radio" name="rate" value="1" />
                    <input type="radio" name="rate" value="2" />
                    <input type="radio" name="rate" value="3" />
                    <input type="radio" name="rate" value="4" />
                    <input type="radio" name="rate" value="5" />
                    <br /><br /><br /><br />
                </section>
            </div>
        );
    }
}

export default TodayFavourite;