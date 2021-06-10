import React from "react"
import { useDispatch } from "react-redux"
import { actionDetal } from "../actions/pages"


export const Item = (props) => {

    const dispatch = useDispatch()

    const URL = `https://www.themoviedb.org/t/p/w220_and_h330_face/${props.item.backdrop_path}`

    return (

        <div className="lists__item">
            <h5 className="title__item">
                {props.item.title.slice(0, 25)}{props.item.title.length > 25 && <span>...</span>}
            </h5>

            {props.item.backdrop_path !== null ?
                <img className="img__item" src={URL} alt={props.item.title} />
                :
                <div className="img__not" >NOT IMG</div>
            }

            <div className="button__block">
                <button className="butten__item" onClick={() => dispatch(actionDetal(props.item.id))}>MORE</button>
                {props.item.adult ?
                    <div className="butten__block-text">
                        movie for 18+
                  </div>
                    :
                    <div className="butten__block-text">Film for adults and children</div>

                }
            </div>
        </div>)

}
