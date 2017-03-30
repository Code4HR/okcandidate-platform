import {
  TOGGLE_SIDEBAR_VISIBLITY
} from './../actions/ui-actions';

const initialState = {
    sidebarVisibility: false
};

export default (state = initialState, action) => {

    switch (action.type) {

    case TOGGLE_SIDEBAR_VISIBLITY:
        return Object.assign({}, state, {
            sidebarVisibility: !state.sidebarVisibility
        });

    default:
        return state;

    }

};
