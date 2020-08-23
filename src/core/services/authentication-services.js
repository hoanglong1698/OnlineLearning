import axios from 'axios';

export const login = (username, password) => {
    if (username === 'Admin') {
        if (password === '123456') {
            return { status: 200, user: { username, token: 'abc', fullname: 'Administrator' } }
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

export const RegisterUser = async (info) => {
    return await axios.post('https://api.itedu.me​/user/register', {
        username: info.name,
        email: info.email,
        phone: info.phone,
        password: info.password
    })
        .then(function (response) {
            console.log(response.data.message);
        })
        .catch(function (error) {
            console.log(error.response.data.message);
        });
}