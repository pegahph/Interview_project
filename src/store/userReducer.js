import * as actionTypes from './actions/actionTypes';
import JWT from 'expo-jwt';

const initialState = {
    authenticated: false,
    users: [{
        name: 'John',
        lastName: 'Doe',
        username: '09120000000',
        password: '00000',       
        role: 'مدیر',
        email: "admin@gmail.com",
        id: 1,
        image: 'avatar2.jpg',
    },
    {
        username: '006789',
        password: '4444',
        name: 'سارا',
        lastName: 'رنجبر',
        role: 'کاربر عادی',
        email: "ssara@gmail.com",
        id:2,
        image: '',
    }
    
    ],
    currentUser: {},
    isError: false,
    newId: 3,
    forgotPasswordInfo: {
        user: {},
        notFound: false
    }
}

const authenticating = (state, action) => {
    const user = state.users.filter(user => (
        user.username === action.payload.username && user.password === action.payload.password
    ));
    if(user.length !== 0){
        const key = 'shh';
        const jsonUser = encodeURIComponent(JSON.stringify(user[0]));
        const token = JWT.encode(jsonUser, key);
        localStorage.setItem('token',token);
        return {
            ...state,
            authenticated: true,
            currentUser: user,
            isError: false,
        }
    }
    return {
        ...initialState,
        isError: true,
        authenticated: false,
    }
}

const getUser = (state, action) => {
    const token = localStorage.getItem('token');
    if(token) {
        const key = 'shh';
        const jsonUser = decodeURIComponent(JWT.decode(token, key));
        const user = JSON.parse(jsonUser);
        return {
            ...state,
            authenticated: true,
            currentUser: user,
            isError: false,
        }
    }else {
        return {
            ...state,
            authenticated: false,
            currentUser: {},
            isError: false,
        }
    }
}

const logOut = (state, action) => {
    localStorage.removeItem('token')
    return {
        ...state,
        authenticated: false,
        currentUser: {},
    }
}

const editUser = (state, action) => {
    const updatedUsers = state.users.map(user => (
        user.id === action.payload.userId ? action.payload.updatedData : user
    ));
    if(state.currentUser.id === action.payload.userId) {
        return {
            ...state,
            users: updatedUsers,
            currentUser: action.payload.updatedData
        }
    }
    return {
        ...state,
        users: updatedUsers
    }
}

const addUser = (state, action) => {
    return {
        ...state,
        users: [...state.users , action.userData],
        newId: state.newId +1
    }
}

const deleteUser = (state, action) => {
    const updatedUsers = state.users.filter(user => (
        user.id !== action.userId
    ));
    if(state.currentUser.id === action.userId) {
        localStorage.removeItem('token')
        return {
            ...state,
            users: updatedUsers,
            currentUser: {},
            authenticated: false,
        }
    }
    return {
        ...state,
        users: updatedUsers
    }
}

const restorePassword = (state, action) => {
    const userInfo = state.users.filter(user => user.username === action.username);
    return {
        ...state,
        forgotPasswordInfo: {
            user: userInfo,
            notFound: userInfo.length !== 0 ? false : true
        }
    }
}

const clearForgotPassword = (state, action) => {
    return {
        ...state,
        forgotPasswordInfo: {
            user: {},
            notFound: false
        }
    }
}


const reducer = (state = initialState , action) => {
    switch(action.type) {
        case actionTypes.AUTHENTICATING:
            return authenticating(state, action);
        case actionTypes.GET_USER:
            return getUser(state, action);
        case actionTypes.LOGOUT:
            return logOut(state,action);
        case actionTypes.EDIT_USER:
            return editUser(state, action);
        case actionTypes.ADD_USER:
            return addUser(state, action);
        case actionTypes.DELETE_USER:
            return deleteUser(state, action);
        case actionTypes.RESTORE_PASSWORD:
            return restorePassword(state, action);
        case actionTypes.CLEAR_FORGOT_PASSWORD:
            return clearForgotPassword(state, action);
        default:
            return state
    }
}

export default reducer;