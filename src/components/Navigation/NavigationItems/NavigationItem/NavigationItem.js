import React from 'react';
import {NavLink} from 'react-router-dom';

import classes from './NavigationItem.css';
import PropTypes from 'prop-types';

const navigationItem = props => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            activeClassName={classes.active}
            exact={props.exact}
        >{props.children}</NavLink>
    </li>
);

navigationItem.propTypes = {
    link: PropTypes.string,
    exact: PropTypes.bool
};

export default navigationItem;