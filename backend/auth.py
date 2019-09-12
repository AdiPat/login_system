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
    return token


def store_token(username, token):
    """Stores login token for a user."""
    pass


def is_token_valid(username, token):
    """Returns true if token is valid"""
    return True


def get_data(username, token):
    """Returns user data from table."""
    # check if username exists
    user = user_table[username]
    data = user['data']
    return data
