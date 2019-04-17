import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import PropTypes from 'prop-types';

const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open)
        attachedClasses = [classes.SideDrawer, classes.Open];

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems isAuth={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
};

sideDrawer.propTypes = {
    open: PropTypes.bool,
    closed: PropTypes.func,
    isAuth: PropTypes.bool
};

export default sideDrawer;