'use strict';

import {
    UPDATE_SOCIAL_MEDIA_TAGS
} from '../actions/social-actions';

const baseUrl = 'http://okcandidate.code4hr.org';

const initialState = {
    siteName: 'OKCandidate',
    description: 'Find out which candidates for local office are a match for you!',
    image: `${baseUrl}/dist/images/ballot-box.png`,
    shortDescription: 'Find out which candidates for local office are a match for you!',
    creator: '@code4hr',
    passPhrase: ''
};

function getDescription(matches) {
    return `${getShortDescription(matches)} ${initialState.description}`;
}

function getShortDescription(matches) {
    return `I matched with ${candidateMatchString(matches)}.`;
}

function candidateMatchString(matches) {
    if (matches.length === 1) {
        return matches[0].name;
    }
    if (matches.length === 2) {
        return `${matches[0].name} and ${matches[1].name}`;
    }
    if (matches.length === 3) {
        return `${matches[0].name}, ${matches[1].name}, and ${matches[2].name}`;
    }
}

export default function socialReducer(state = initialState, action) {
    switch (action.type) {

    case UPDATE_SOCIAL_MEDIA_TAGS:
        return Object.assign({}, {
            description: getDescription(action.matches),
            shortDescription: getShortDescription(action.matches),
            image: baseUrl + action.matches[0].picture
        });

    default:
        return state;
    }
}
