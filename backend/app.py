from flask import Flask
from flask import request
from flask import jsonify
from .auth import *
import jwt


app = Flask(__name__)


# POST: username and password, returns a token
@app.route('/login', methods=['POST'])
def api_login():
    is_valid = False
    error = None
    response_data = {'username_valid': False, 'login_valid': False}
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        username_valid, password_valid = is_login_valid(username, password)
        if username_valid and password_valid:
            token = get_token(username, password)
            response_data['username_valid'] = True
            response_data['login_valid'] = True
            response_data['token'] = token
        if username_valid and not(password_valid):
            response_data['username_valid'] = True
            response_data['login_valid'] = False
    return jsonify(response_data)

# GET: Returns boolean if token is valid
@app.route('/hello', methods=['GET'])
def api_hello():
    response_data = {
        'status': False
    }
    if request.method == 'GET':
        token = request.form['token']
        username = request.form['username']
        print(token, username)
        if is_token_valid(username, token):
            response_data['status'] = True
    return jsonify(response_data)

# GET: Returns data if token is valid
@app.route('/data', methods=['GET'])
def api_data():
    response_data = {
        'status': False
    }
    if request.method == 'GET':
        username = request.form['username']
        token = request.form['token']
        if is_token_valid(username, token):
            data = get_data(username, token)
            response_data['username'] = username
            response_data['data'] = data
            response_data['status'] = True
    return jsonify(response_data)


@app.route('/ping', methods=['GET'])
def api_ping():
    response_data = {
        'message': 'API Testing!'
    }
    return jsonify(response_data)
