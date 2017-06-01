import { browserHistory } from 'react-router';

export function gotoRoute(route) {
    browserHistory.push(route);
}
