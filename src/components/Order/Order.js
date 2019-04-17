import React from 'react';

import classes from './Order.css';
import PropTypes from 'prop-types';

const order = props => {
    const ingredients = [];

    for(let ingredientName in props.ingredients)
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]});

    const ingredientOutput = ingredients.map(ig => {
        return (
            <span
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'
                }}
                key={ig.name}
            >{ig.name} ({ig.amount})</span>
        );
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput} <button onClick={props.removeOrder}>Remove</button></p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

order.propTypes = {
    ingredients: PropTypes.object,
    price: PropTypes.number,
    removeOrder: PropTypes.func
};

export default order;