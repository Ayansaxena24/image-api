import React, { useEffect, useState } from "react";
import Cards from "../card/Card";
import "./MovieList.css"
import { useParams } from "react-router-dom"; //holds parameters
// import { isDisabled } from "@testing-library/user-event/dist/utils";

const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
      getData()
    }, [])
    
    useEffect(() => {
      getData()  
    }, [type])
    
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    //Pagination

    // function Pagination( { movie, RenderComponent, title, pageLimit, dataLimit }) {
    //     const [pages] = useState(Math.round(movie.length/dataLimit))
    //     const [currentPage, setCurrentPage] = useState(1);

    //     function goToNextPage() {
    //         setCurrentPage((page) => page+1);
    //     }
        
    //     function goToPreviousPage() {
    //         setCurrentPage((page) => page-1);
    //     }

    //     function changePage(event) {
    //         const pageNumber = Number(event.target.textContent);
    //         setCurrentPage(pageNumber);
    //     }

    //     const getPaginatedData = () => {
    //         const startIndex = currentPage*dataLimit - dataLimit;
    //         const endIndex = startIndex + dataLimit;
    //         return data.slice(startIndex, endIndex);
    //     };

    //     const getPaginationGroup = () => {
    //         let start = Math.floor((currentPage-1)/pageLimit)*pageLimit;
    //         return new Array(pageLimit).fill().map((_,idx) => start + idx + 1);

    //     };

    //     return (
    //         <div>

    //             {/*Show 10 posts at a time*/}
    //             <div className="dataContainer">
    //                 {getPaginatedData().map((d,idx) => (
    //                     <RenderComponent key={idx} data={d} />
    //                 ))}
    //             </div>

    //             {/*Pagination */}
    //             <div className="pagination">
    //             {/*Show Prev Button*/}
    //                 <button onClick = {goToPreviousPage} 
    //                 className={`prev${currentPage === 1 ? 'disabled' : ''}`} > prev </button>
                
    //             {/*Show Page Numbers*/}
    //                 {getPaginationGroup().map((item,index) => (
    //                     <button 
    //                     key = {index}
    //                     onClick = {changePage}
    //                     className = {`paginationItem ${currentPage === item ? 'active' : null}`}
    //                     > <span>{item}</span> </button>
    //                 ))}

    //             {/*Show Next Button*/}
    //                 <button onClick={goToNextPage}
    //                 className={`next ${currentPage===pages ? disabled : ''}`}
    //                 > next </button>
    //             </div>
    //         </div>
    //     );

    // }
    //Pagination ends

    //Using Pagination Component
    // function pataNahi() {
    //     const [posts, setPosts] = useState([]);
    //     const [error, setError] = useState("");

    //     useEffect(() => {
    //     ...
    //     }, [])

    //     if (error) return <h1>{error}</h1>;
    //     return (
    //         <div> 
    //             {posts.length > 0 ? (
    //                 <>
    //                 <Pagination
    //                   data = {posts}
    //                   RenderComponent = {Post}
    //                   title = "Posts"
    //                   pageLimit={5}
    //                   dataLimit={10}
    //                   />
    //                 </>
    //             ) : (
    //                 <h1>No Movies to display</h1>
    //             )}
    //         </div>
    //     );

    // }
    //Pagination Component use Ends

    return (
        <div className="movie_list">
            <h2 className="list_title">{(type?type: "POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
    
}

export default MovieList