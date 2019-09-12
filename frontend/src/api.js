import $ from 'jquery';

/**
 * Verifies login credentials and returns a secure token from server
 * @param {username} string
 * @param {password} string
 * @returns {boolean}
 */
export function apiLogin(username, password) {
    let URL = 'http://localhost:5000/login';
    const postBody = {
        username: username,
        password: password,
    };

    let token = null;
    $.ajax({
        type: 'POST',
        url: URL,
        data: postBody,
        async: false,
        success: response => {
            console.log(response);
            token = response.token;
        },
        error: error => console.log(error),
    });
    return token;
}

/**
 * Returns a boolean value to verify that user is logged in
 * @param {username} string
 * @param {token} string
 * @returns {boolean}
 */
export function apiHello(username, token) {
    let URL = 'http://localhost:5000/hello';
    const args = {
        username: username,
        token: token,
    };

    let status = false;

    $.ajax({
        type: 'GET',
        url: URL,
        async: false,
        data: args,
        success: response => {
            console.log(response);
            status = response.status;
        },
        error: error => console.log(error),
    });

    // const data = rawResponse.json();
    return status;
}

/**
 * Returns Dash data from server
 * @param {username} username
 * @param {token} token
 * @returns {boolean}
 */
export async function apiData(username, token) {
    let URL = 'http://localhost:5000/data';
    const args = {
        username: username,
        token: token,
    };

    let data = null;
    // TODO: Update URL
    $.ajax({
        type: 'GET',
        url: URL,
        data: args,
        success: response => {
            console.log(response);
            data = response.data;
        },
        error: error => {
            console.log(error);
        },
    });

    return data;
}
