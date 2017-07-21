'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MultipleChoiceSelector extends Component {
    render() {
        return (
            <div className="multiple-choice-selector">
                {
                    [{}, {}, {}, {}, {}].map((option, index) => {
                        return (
                            <div
                                className="multiple-choice-item"
                                key={index}>
                                <input type="radio" /> <label>Multiple choice option {index + 1}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

MultipleChoiceSelector.propTypes = {
    options: PropTypes.array
};

export default MultipleChoiceSelector;
