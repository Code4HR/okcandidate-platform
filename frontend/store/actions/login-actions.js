export const USER_LOGIN = 'USER_LOGIN';
export function userLogin(user) {
    return {
        type: USER_LOGIN,
        user
    };
}

export const USER_LOGOUT = 'USER_LOGOUT';
export function userLogout() {
    return {
        type: USER_LOGOUT
    };
}
