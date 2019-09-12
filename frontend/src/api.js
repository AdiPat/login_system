import $ from 'jquery';

/**
 * Verifies login credentials and returns a secure token from server
 * @param {username} string
 * @param {password} string
 * @returns {boolean}
 */
export async function apiLogin(username, password) {
    let URL = 'http://localhost:5000/login';
    const postBody = {
        username: username,
        password: password,
    };

    let token = 'Dummy';
    // TODO: Update token
    $.ajax({
        type: 'POST',
        url: URL,
        data: postBody,
        success: response => {
            console.log(response);
        },
    });

    // const data = rawResponse.json();
    return token;
}

/**
 * Returns a boolean value to verify that user is logged in
 * @param {username} string
 * @param {token} string
 * @returns {boolean}
 */
export async function apiHello(username, token) {
    let URL = 'http://localhost:5000/hello';
    const postBody = {
        username: username,
        token: token,
    };

    let status = true;

    $.ajax({
        type: 'POST',
        url: URL,
        data: postBody,
        success: response => {
            console.log(response);
        },
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
    const postBody = {
        username: username,
        token: token,
    };

    let data = 'url';
    // TODO: Update URL
    $.ajax({
        type: 'POST',
        url: URL,
        data: postBody,
        success: response => {
            console.log(response);
        },
    });

    // const data = rawResponse.json();
    return data;
}
