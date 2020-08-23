export const reducer = (prevState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCEED":
            return {
                ...prevState,
                isAuthenticated: true,
                token: action.data.token,
                userInfo: action.data.userInfo
            }

        case "LOGIN_FAILED":
            return { ...prevState, isAuthenticated: false }

        case "CHANGE_INFO_SUCCESSFULLY":
            return { ...prevState, userInfo: action.data }

        case "CHANGE_INFO_FAILED":
            return { ...prevState }
        
        case "LOGOUT":
            return {
                ...prevState,
                isAuthenticated: false,
                token: '',
                userInfo: ''
            }
        default:
            throw new Error();
    }
}