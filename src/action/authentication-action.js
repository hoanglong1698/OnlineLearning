import axios from 'axios';

export const login = (dispatch) => (username, password) => {
    axios.post('https://api.itedu.me​/user/login', {
        email: username,
        password: password
        // email: 'hoanglong16198@gmail.com',
        // password: 'brightstar2806'
    })
        .then(function (response) {
            if (response.status === 200) {
                dispatch({ type: "LOGIN_SUCCEED", data: response.data })
            }
            else {
                dispatch({ type: "LOGIN_FAILED" })
            }
        })
        .catch(function (error) {
            dispatch({ type: "LOGIN_FAILED" })
        });
}

export const changeInfo = (dispatch) => (userInfo) => {
    dispatch({ type: "CHANGE_INFO_SUCCESSFULLY", data: userInfo })
}

export const logout = (dispatch) => () => {
    dispatch({ type: "LOGOUT" })
}