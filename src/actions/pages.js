import axios from "axios"
import { setList, setSearch, setDetal } from "../reducers/userRed"


export const actionList = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c5c206e7cac0730e41de2f98b5c00804&language=en-US&page=1`)
            dispatch(setList(response.data))
        } catch (error) {
            alert(error)
        }
    }
}


export const actionSearch = (filmName) => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c5c206e7cac0730e41de2f98b5c00804&query=${filmName}`)
            dispatch(setSearch(response.data))
        } catch (error) {
            alert(error)
        }
    }
}


export const actionDetal = (id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c5c206e7cac0730e41de2f98b5c00804&language=en-US`)
            dispatch(setDetal(response.data))
        } catch (error) {
            alert(error)
        }
    }
}




