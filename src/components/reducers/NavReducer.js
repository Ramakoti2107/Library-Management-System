const initState = "Login"
export default function NavReducer(state=initState, action){
    switch(action.type){
        case "Login":
            return "Login";
        case "Registration":
            return "Registration";
        case "Profile":
            return "Profile";
        case "Entry":
            return "Entry";
        case "Delete Book":
            return "Delete Book";
        case "Buy Book":
            return "Buy Book";
        case "Borrow Book":
            return "Borrow Book";
        default:
            return "Login";
    }
}