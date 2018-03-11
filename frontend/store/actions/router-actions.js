import Router from 'next/router';

export function gotoRoute(route) {
    Router.push({
        pathname: route
    });
}
