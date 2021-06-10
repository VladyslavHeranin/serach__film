import React from "react"
import { useSelector } from "react-redux"

export const Datel = (props) => {

    const isAuth = useSelector(state => state.user.currentUser)

    const URL = `https://www.themoviedb.org/t/p/w220_and_h330_face/${isAuth.backdrop_path}`

    return (

        <div className="datel__block">

            {isAuth.backdrop_path !== null ?
                <img className="img__item" src={URL} alt={isAuth.title} />
                :
                <div className="img__not" >NOT IMG</div>
            }

            <div className="info">
                <h4 className="info__item-title">TITLE <span>{isAuth.title}</span></h4>
                {isAuth.adult ?
                    <div className="info__item">
                        movie for 18+
                  </div>
                    :
                    <div className="info__item">Film for adults and children</div>
                }

                <div className="info__item">Original title: <span>{isAuth.original_title}</span></div>
                <div className="info__item">Budget: <span>{isAuth.budget} $</span></div>
                <div className="info__item">Release date: <span>{isAuth.release_date}</span></div>
                <div className="info__item">Runtime: <span>{isAuth.runtime} minut</span></div>
                <div className="info__item">Status: <span>{isAuth.status}</span></div>
                <div className="info__item">Vote average: <span>{isAuth.vote_average}</span></div>
                <div className="info__item">Overview: <span>{isAuth.overview}</span></div>
            </div>


        </div>)

}



