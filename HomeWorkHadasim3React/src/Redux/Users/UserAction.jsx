
export function GetUserById(user) {
    return { type: "GET_USER_BY_ID",paylod:user }
}
export function AddUser(user) {
    return { type: "ADD_USER",paylod:user }
}
export function GetAllUsers(user) {
    return { type: "GET_ALL_USERS",paylod:user }
}
export function UpdateUser(user) {
    return { type: "UPDATE_USER",paylod:user }
}

export function isMenneger(value) {
 return { type: "IS_MENNEGER",payload:value }
    }

   
export function IfSick(value) {
    return { type: "IF_SICK",payload:value }
}
    
