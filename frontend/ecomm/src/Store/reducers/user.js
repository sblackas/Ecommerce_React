const initialStates = {
    token: null,
    email: null,
    id: null
 };
 
 const userReducer = (state = initialStates, action) => {
   switch (action.type) {
     case "SIGNIN_USER":
       return {
         ...state,
         token: action.token,
         email: action.email,
         id: action.id
       };
     case "SIGNOUT_USER":
       return {
         ...state,
         token: null,
         email: null,
         id: null
       };
     default:
       return {
         ...state,
       };
   }
 };
 
 export default userReducer;