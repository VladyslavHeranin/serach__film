import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { actionSearch } from "../actions/pages"
import { actionList } from "../actions/pages"
import { useSelector } from "react-redux"



export const Header = () => {

    const [filmName, setFilmName] = useState('')

    const isAuth = useSelector(state => state.user)

    const changeHandler = event => {
        setFilmName(event.target.value)
    }

    const dispatch = useDispatch()

    return (

        <div className="navigation_mobile">
            <div className="search">
                <div className="serach__title">SEARCH </div>
                {isAuth.type === "list" || <div className="search__button" onClick={() => dispatch(actionList())}>go to top list</div>}
                {((filmName !== "") && (isAuth.type === "detal")) && <div className="search__button" onClick={() => dispatch(actionSearch(filmName))}>go to search list</div>}
            </div>
            <div className="input__block">
                <input
                    className="input__value white-text"
                    placeholder="film"
                    id="film"
                    type="text"
                    name="film"
                    onChange={changeHandler}
                />

                {filmName !== "" ?
                    <button className="input__button" onClick={() => dispatch(actionSearch(filmName))}>search</button>
                    :
                    <button className="input__button" onClick={()=>alert("please enter text")}>search</button>
                }

            </div>


        </div>)

}


