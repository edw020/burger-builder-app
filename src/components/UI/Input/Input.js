import React from 'react';
import classes from './Input.css';
import PropTypes from 'prop-types';

const input = props => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if(props.invalid && props.shouldValidate && props.touched)
        inputClasses.push(classes.Invalid);

    switch (props.elementType) {
        case 'input':
            inputElement = <input {...props.elementConfig} className={inputClasses.join(' ')} value={props.value} onChange={props.changed} />;
            break;
        case 'textarea':
            inputElement = <textarea {...props.elementConfig} className={inputClasses.join(' ')} value={props.value} onChange={props.changed} />;
            break;
        case 'select':
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option =>(
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input {...props.elementConfig} className={inputClasses.join(' ')} value={props.value} onChange={props.changed} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

input.propTypes = {
    invalid: PropTypes.bool,
    shouldValidate: PropTypes.object,
    touched: PropTypes.bool,
    elementType: PropTypes.string,
    elementConfig: PropTypes.object,
    value: PropTypes.string,
    changed: PropTypes.func,
    label: PropTypes.string
};

export default input;