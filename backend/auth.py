import jwt


def get_user_table():
    """Returns dict having user info from file users.txt"""
    #users_file = os.open('users.txt', 'r')
    user_table = {}
    with open('users.txt', 'r') as users_file:
        for line in users_file.readlines():
            username, password, url = line.split(' ')
            user = {
                'username': username,
                'password': password,
                'data': url.strip(),
            }
            user_table[username] = user
    return user_table


# Read data from file/db
user_table = get_user_table()
token_table = {}


def get_password(username):
    """Returns correct password."""
    password = None
    if user_table.get(username):
        user = user_table[username]
        password = user['password']
    return password


def is_login_valid(username, password):
    """Returns true if username,password combination is valid."""
    username_valid = False
    flag = False
    correct_password = get_password(username)
    if correct_password:  # Username exists
        username_valid = True
    if password == correct_password:  # Password is correct
        flag = True
    return (username_valid, flag)


def get_token(username, password):
    """Returns a new token for login credentials."""
    payload = {'username': username, 'password': password}
    key = username + password  # simple key
    token = jwt.encode(payload, key, algorithm='HS256')
    # Convert bytes to string
    token = token.decode('utf-8')
    # Store token
    store_token(token)
    return token


def store_token(token):
    """Stores login token for a user."""
    status = False
    if token_table.get(token) == None:
        token_table[token] = True
        status = True
    return status


def is_token_valid(username, token):
    """Returns true if token is valid"""
    flag = token_table.get(token)
    return bool(flag)


def get_data(username, token):
    """Returns user data from table."""
    # check if username exists
    user = user_table.get(username)
    data = None
    if user:
        data = user['data']
    print("\n\nget_data()", user)
    return data
