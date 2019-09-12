from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS
import json
from .auth import *
import jwt


app = Flask(__name__)
CORS(app)
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True


# POST: username and password, returns a token
@app.route('/login', methods=['POST'])
def api_login():
    is_valid = False
    error = None
    response_data = {'username_valid': False, 'login_valid': False}
    if request.method == 'POST':
        print(request.form)
        username = request.form.get('username')
        password = request.form.get('password')
        username_valid, password_valid = is_login_valid(username, password)
        if username_valid and password_valid:
            token = get_token(username, password)
            response_data['username_valid'] = True
            response_data['login_valid'] = True
            response_data['token'] = token
        if username_valid and not(password_valid):
            response_data['username_valid'] = True
            response_data['login_valid'] = False
    print(response_data)
    return jsonify(response_data)

# GET: Returns boolean if token is valid
@app.route('/hello', methods=['GET'])
def api_hello():
    response_data = {
        'status': False
    }
    if request.method == 'GET':
        print(request.args)
        token = request.args.get('token')
        username = request.args.get('username')
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
        username = request.args.get('username')
        token = request.args.get('token')
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
