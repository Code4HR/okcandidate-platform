import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
    }

    onFocus(e) {
        this.setState({focus: true});
    }

    onBlur(e) {
        this.setState({focus: false});
    }

    render() {
        return (
            <div
                onClick={this.props.onChange.bind(this, this.props.id)}
                className="radio-button-item">
                <input
                    onFocus={this.onFocus.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    type="radio"
                    id={this.props.label}
                    name={this.props.name}
                    checked={this.props.checked}
                    value={this.props.label} />
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <div className={`
                    radio-button-indicator
                    ${this.props.checked && 'checked'}
                    ${this.state.focus && 'focused'}`}></div>
            </div>
        );
    }
}

RadioButton.propTypes = {
    index: PropTypes.number,
    label: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    id: PropTypes.number
};

export default RadioButton;
