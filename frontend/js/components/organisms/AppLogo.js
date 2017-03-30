import React, { PropTypes, Component } from 'react';

import IconButton from './../molecules/IconButton';

class AppLogo extends Component {

    render() {
        return (
      <section className="app-logo">
        <IconButton
          onClick={this.props.onClick}
          icon="menu" />
        <a href="#">
          <img alt="OKCandidate" src="/dist/images/okcandidate-logo.svg" />
        </a>
      </section>
    );
    }

}

AppLogo.propTypes = {
    onClick: PropTypes.func
};

export default AppLogo;
