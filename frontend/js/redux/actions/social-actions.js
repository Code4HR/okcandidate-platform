'use strict';

export const UPDATE_SOCIAL_MEDIA_TAGS = 'UPDATE_SOCIAL_MEDIA_TAGS';

function getBestMatches(matches) {
    return matches.reduce((memo, value) => {
        // Is this value the same as the one before?
        if (memo.length === 0) {
            memo.push(value);
        }
        else if (memo[0].matchRate === value.matchRate) {
            memo.push(value);
        }
        return memo;
    }, []);
}

export function updateSocialMediaTags(matches) {
    return {
        type: UPDATE_SOCIAL_MEDIA_TAGS,
        matches: getBestMatches(matches)
    };
}
