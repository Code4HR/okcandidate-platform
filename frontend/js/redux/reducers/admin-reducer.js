import {
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  TOGGLE_USER_MANAGER_USER_EDITABLE
} from '../actions/admin-actions'

const initialState = {
  isFetching: false,
  users: {
    isFetching: false,
    currentlyEditing: null,
    results: []
  },
  editUser: {}
}

export default (state = initialState, action) => {

    switch (action.type) {
    case FETCH_ALL_USERS_REQUEST:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          isFetching: true
        })
      })

    case FETCH_ALL_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          isFetching: false,
          results: action.response
        })
      })

    case FETCH_ALL_USERS_FAILURE:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          isFetching: false,
          help: 'There was an error fetching users.'
        })
      })

    case FETCH_USER_REQUEST:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          isFetching: true
        })
      })

    case FETCH_USER_SUCCESS:
      const userExists = state.users.results.filter(user => {
        if (user.id === action.response.id) {
          return user
        }
      })

      if (userExists.length > 0) {
        return Object.assign({}, state, {
          users: Object.assign({}, state.users, {
            isFetching: false,
            currentlyEditing: action.response.id
          })
        })
      }

      else {
        return Object.assign({}, state, {
          users: Object.assign({}, state.users, {
            isFetching: false,
            currentlyEditing: action.response.id,
            results: [action.response]
          })
        })
      }

    case FETCH_USER_FAILURE:
      return Object.assign({}, state, {
        users: Object.assign({}, state.users, {
          isFetching: false,
          help: 'There was an error fetching user.'
        })
      })

    default:
      return state
  }

};
