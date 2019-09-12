import requests
from auth import get_user_table

ROOT_URL = 'http://localhost:5000'


def test_ping():
    r = requests.get(ROOT_URL+'/ping')
    print(r.text)


def test_login():
    data = {
        'username': 'rocky',
        'password': 'rocky@123'
    }
    r = requests.post(url=ROOT_URL+'/login', data=data)
    print(r.text)


def test_hello():
    data = {
        'username': 'rocky',
        'password': 'rocky@123'
    }
    token = requests.post(url=ROOT_URL+'/login', data=data).text
    hello = requests.get(
        url=ROOT_URL+'/hello', data={'username': data['username'], 'token': token}).text
    print(hello)


def test_data():
    data = {
        'username': 'rocky',
        'password': 'rocky@123'
    }
    token = requests.post(url=ROOT_URL+'/login', data=data).text
    data = requests.get(
        url=ROOT_URL+'/data', data={'username': data['username'], 'token': token}).text
    print(data)


def test_get_user_table():
    user_table = get_user_table()
    print(user_table)
    return len(user_table.keys()) > 0


# test_ping()
# test_login()
# test_hello()
# test_data()
# test_get_user_table()
