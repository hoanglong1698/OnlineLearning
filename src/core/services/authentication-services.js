export const login = (username, password) => {
    if (username === 'A') {
        if (password === '1') {
            return { status: 200, user: {username, token: 'abc', fullname: 'Administrator'} }
        }

        else if (password === '') {
            return { status: 404, errorString: 'Please input your password!' }
        }

        else {
            return { status: 404, errorString: 'Username or password is incorrect!' }
        }
    }

    else if (username === '') {
        return { status: 404, errorString: 'Please input your username!' }
    }

    else {
        return { status: 404, errorString: 'Username or password is incorrect!' }
    }
}