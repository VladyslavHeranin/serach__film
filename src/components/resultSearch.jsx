import { useSelector } from "react-redux"
import React from "react"
import { Item } from "./item"

export const Search = (props) => {

    const isAuth = useSelector(state => state.user)

    return (
        <div >
            {isAuth.currentUser.results.length !== 0
                ?
                <div className="lists">
                    {isAuth.currentUser.results.map((item, index) => <Item key={index} item={item} index={index} />)}
                </div>
                :
                <div className="none_result">
                    no search results found
                </div>}

        </div>)

}

