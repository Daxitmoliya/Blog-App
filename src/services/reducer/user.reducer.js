import { CREATEUSERREJ, CREATEUSERREQ, CREATEUSERRES, DELETEUSERREJ, DELETEUSERREQ, DELETEUSERRES, GETUSERREJ, GETUSERREQ, GETUSERRES, SINGLEUSERREJ, SINGLEUSERREQ, SINGLEUSERRES, UPDATEUSERREJ, UPDATEUSERREQ, UPDATEUSERRES } from "../const"

const initialState = {
    users: [],
    user: null,
    isLoading: false,
    err: null
}

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATEUSERREQ:
            return {
                ...state,
                isLoading: true,
            }
        case CREATEUSERRES:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }

        case CREATEUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: "somethings went wrong .."
            }

        case GETUSERREQ:
            return {
                ...state,
                isLoading: true,
            }
        case GETUSERRES:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }

        case GETUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: "somethings went wrong .."
            }

        case SINGLEUSERREQ:
            return {
                ...state,
                isLoading: true,
            }
        case SINGLEUSERRES:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }

        case SINGLEUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: "somethings went wrong .."
            }

        case UPDATEUSERREQ:
            return {
                ...state,
                isLoading: true,
            }
        case UPDATEUSERRES:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }

        case UPDATEUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: "somethings went wrong .."
            }

        case DELETEUSERREQ:
            return {
                ...state,
                isLoading: true,
            }
        case DELETEUSERRES:
            const deleteUser = state.users.filter((user) => user.id !== action.payload);
            return {
                ...state,
                isLoading: false,
                users: deleteUser
            }

        case DELETEUSERREJ:
            return {
                ...state,
                isLoading: false,
                err: "somethings went wrong .."
            }

        default: return state;
    }
}