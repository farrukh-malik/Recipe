import React, { Component } from 'react';
import '../recipe-card/recipe-card.css';
// import Kazuya from '../images/Kazuya.png';

class RecipeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <section id="instruction">
                    <h1>INGREDIENTS</h1>
                    <ol>
                        <li>Chicken 1</li>
                        <li>Wheat 1/2 kg</li>
                        <li>Oil 1 cup</li>
                        <li>Boiled split Bengal gram 1 cup</li>
                        <li>Onions 3 (finely chopped)</li>
                        <li>Yogurt 1/2 cup</li>
                        <li>All spice 1 tsp (crushed)</li>
                        <li>Ginger garlic pate 1 tbsp</li>
                        <li>Red chili powder 1 tbsp</li>
                        <li>Turmeric 1 tsp</li>
                        <li>Baking soda 1/2 tsp</li>
                        <li>Mint leaves 1 bunch (finely chopped)</li>
                        <li>Green chilies 10 (finely chopped)</li>
                        <li>Cumin powder 2 tbsp</li>
                        <li>Garam masala powder 2 tbsp</li>
                    </ol>
                </section>

                <section id="direction">
                    <h1>COOKING DIRECTIONS</h1>
                    <ol>
                        <li>Divide chicken into 14 pieces.</li>
                        <li>In a pan put 3 cups water, and add chicken, 1 cup oil, turmeric, red chili powder, salt, ginger garlic paste, crush all spices, finely chopped onion and let it cook till water dries.</li>
                        <li>ONow add yogurt and cook until the oil forms a separate layer on top.</li>
                        <li>Turn off the flame.</li>
                        <li>Soak wheat and Bengal gram in water for 3-4 hours.</li>
                        <li>Drain the water and cook the wheat in fresh water with 2 tbsp oil.</li>
                        <li>Stir with a wooden spoon.</li>
                        <li>When the color of wheat changes add 1/2tsp baking soda and cook till tender.</li>
                        <li>Transfer the wheat in chicken and add 2 cups water.</li>
                        <li>In the meantime grind Bengal gram into a paste.            </li>
                        <li>Add the lentil paste in the chicken and cover with lid.            </li>
                        <li>After 15 minutes blend chicken with its mixture very well.            </li>
                        <li>Cook and keep mixing haleem for 10 minutes.            </li>
                        <li>Cumin powder 2 tbsp</li>
                        <li>Garam masala powder 2 tbsp</li>
                    </ol>
                </section>
            </div>
        );
    }
}

export default RecipeCard;