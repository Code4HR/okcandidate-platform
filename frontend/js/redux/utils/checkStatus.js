'use strict';

export default function checkStatus(response) {
    return new Promise((resolve, reject) => {
        if ( (response.status || response.statusCode) >= 200 &&
        (response.status || response.statusCode) < 300) {
            resolve(response);
        }
        else {
            return response.json()
            .then((error) => {
                reject(error);
            });
        }
    });
}
