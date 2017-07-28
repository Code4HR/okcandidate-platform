import React, { PropTypes, Component } from 'react';

import IconButton from './../molecules/IconButton';

class AppLogo extends Component {

    render() {
        return (
      <section className="app-logo">
        {
            this.props.displayMenuButton &&
            <IconButton
                onClick={this.props.onClick}
                icon="menu" />
        }
        <a href="/">
          <img alt="OKCandidate" src="/dist/images/okcandidate-logo.svg" />
        </a>
      </section>
    );
    }

}

AppLogo.propTypes = {
    onClick: PropTypes.func,
    displayMenuButton: PropTypes.bool
};

export default AppLogo;
