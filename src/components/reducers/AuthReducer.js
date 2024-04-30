const initState = [null, 0]
export default function AuthReducer(state=initState, action){
    switch(action.type) {
        case "login":
            localStorage.setItem("un" , action.data.un)
            localStorage.setItem("Role" , action.data.Role)
            return [action.data.un, action.data.Role]
        case "logout":
            localStorage.removeItem("un")
            localStorage.removeItem("Role")
            return [null, 0]
        default:
            return [null, 0]
    }
}