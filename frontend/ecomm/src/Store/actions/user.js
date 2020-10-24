// import userReducer from "../reducers/user"

export const loginUser = (user) => ({
    type: "SIGNIN_USER",
    token: user.token,
    email: user.email,
    id: user.id
})

export const logoutUser = () => ({
    type: "SIGNOUT_USER"
})