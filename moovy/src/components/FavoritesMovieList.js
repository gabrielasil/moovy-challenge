import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {useStateIfMounted} from "use-state-if-mounted";

const FavoritesMovieList = ({favoriteComponent, movies, handleFavoritesClick, playReview, addReview, reviews}) => {
    const FavoriteComponent = favoriteComponent;
    const PlayReview = playReview;
    const AddReview = addReview;
    const [localMovies, setLocalMovies] = useStateIfMounted([]);
    useEffect(() => {
        const promises = movies.map(async (movie)=> {
            const url = `https://www.omdbapi.com/?i=${movie.movieID}&apikey=201f1cda` //template string
            
            return (await fetch(url)).json();
            }
        )
        Promise.all(promises).then(setLocalMovies);

      }, [movies]);
      
    return (
        <>
            {localMovies.map((movie, index)=> (
                <div className='image-container d-flex justify-content-start m-3' key={movie.imdbID}>
                    <div className ='name-container d-flex align-items-center justify-content-center'><p>{movie.Title} <br></br> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f0cc3e" className="bi bi-star-fill" viewBox="0 0 18 20">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>{movie.imdbRating}</p></div>
                    <img src={movie.Poster} alt="movie"></img>
                    <div onClick ={()=>handleFavoritesClick(movie)}
                    className ='overlay d-flex align-items-center justify-content-center'>
                    
                    <FavoriteComponent/>
                    
                    </div>
                    {/*<div className ='overlay d-flex align-items-center justify-content-center'>
                        {<PlayReview
                            reviews = {reviews}
                            isReview = {movies[index].isReview}
                        />}
                        </div>*/}
                        
                    
                </div>
            ))}
        </>
    );
};

export default FavoritesMovieList;
