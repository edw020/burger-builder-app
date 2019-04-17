import React from 'react';
import classes from './Button.css';
import PropTypes from 'prop-types';

const button = props => (
    <button
        disabled={props.disabled}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

button.propTypes = {
    disabled: PropTypes.bool,
    btnType: PropTypes.string,
    clicked: PropTypes.func
};

export default button;