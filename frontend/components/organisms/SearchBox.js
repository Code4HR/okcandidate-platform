import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {

    render() {
        return (
        <div className="search-box">
            <input className="" placeholder="&#128270;">{this.props.children}</input>
        </div>
    );
    }

}

SearchBox.propTypes = {
    children: PropTypes.any
};

export default SearchBox;
