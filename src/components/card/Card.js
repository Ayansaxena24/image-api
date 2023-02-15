import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./Card.css"
import { Link } from "react-router-dom"
import 'react-loading-skeleton/dist/skeleton.css'

const Cards = ({movie}) => {

    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)  // for 1.5 secs
    }, [])

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} count={3}/>
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards_img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}></img>
                <div className="cards_overlay">
                    <div className="card_title">{movie?movie.original_title:""}</div>
                    <div className="card_runtime">
                        {movie?movie.release_date:""}
                        <span className="card_rating">{movie?movie.vote_average:""}<i className="fas fa-star"></i></span>
                    </div>
                    <div className="card_description">{movie?movie.overview.slice(0,18) + "...":""}</div>
                </div>
            </div>
        </Link>

}
</>
}

export default Cards