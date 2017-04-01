import React, { PropTypes, Component } from 'react'

import { Link } from 'react-router'

import Icon from './../atoms/Icon'

class UserListItem extends Component {

  render() {
    return (
      <div className='row'>
        <div className='two columns'>
            <Link to={'/admin/user/edit/' + this.props.id}>
              <Icon children='edit' />
            </Link>
        </div>
        <div className='four columns'>
          {this.props.name}
        </div>
        <div className='four columns'>
          {this.props.emailAddress}
        </div>
        <div className='two columns'>
          <Icon children='delete' />
        </div>
      </div>
    )
  }

}

UserListItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  emailAddress: PropTypes.string
}

export default UserListItem
