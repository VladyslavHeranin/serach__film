const LIST = "LIST"
const SEARCH = "SEARCH"
const DETAL = "DETAL"



const defaultState = {
    currentUser: [],

}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case LIST:
            return {
                ...state,
                currentUser: action.payload,
                type: "list",
                list: true,
                search: false,
                detal: false
            }
        case SEARCH:
            return {
                ...state,
                currentUser: action.payload,
                type: "search",
                list: false,
                search: true,
                detal: false
            }
        case DETAL:
            return {
                ...state,
                currentUser: action.payload,
                type: "detal",
                list: false,
                search: false,
                detal: true
            }
        default:
            return state
    }
}


export const setList = user => ({ type: LIST, payload: user })

export const setSearch = user => ({ type: SEARCH, payload: user })

export const setDetal = user => ({ type: DETAL, payload: user })

