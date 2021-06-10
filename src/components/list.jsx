import React from "react"
import { actionList } from "../actions/pages"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Item } from "./item"


export const List = (props) => {

    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.user)


    return (<div>
        <h3 className="title">TOP-20</h3>
        <div className="lists">
            <div onClick={() => dispatch(actionList())}></div>
            {isAuth.currentUser.results.map((item, index) => {
                return <Item key={index} item={item} index={index} />
            })}
        </div></div>)

}



