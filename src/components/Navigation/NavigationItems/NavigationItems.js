import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import PropTypes from 'prop-types';

const navigationItems = props => (
    <ul className={classes.Navigationitems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        { props.isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
        { props.isAuth
                ? <NavigationItem link="/logout">Logout</NavigationItem>
                : <NavigationItem link="/auth">Authenticate</NavigationItem>}
    </ul>
);

navigationItems.propTypes = {
    isAuth: PropTypes.bool
};

export default navigationItems;