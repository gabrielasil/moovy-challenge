import React, { useEffect, useState } from "react";
import {useStateIfMounted} from "use-state-if-mounted";
import Toastr from "../components/Toastr";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavorites from "../components/AddFavorites";
import RemoveFavorites from "../components/RemoveFavorites";
import PlayReview from "../components/PlayReview"
import FavoritesMovieList from "../components/FavoritesMovieList";
import { toast } from "react-toastify";
import AddReview from "../components/AddReview";

const App = () => {
  const [favorites, setFavorites] = useStateIfMounted([]);
  const [reviews, setReviews] = useStateIfMounted([]);
  
  useEffect(()=> {
    const url = `http://localhost:3000/api/moovy` //template string
    
    fetch(url).then(async (response) => {
      setFavorites(await response.json());
    }).catch(console.log)

  }, [favorites]); //just on page load

  const removeFavoriteMovie = (movie) => {
    fetch(`http://localhost:3000/api/moovy/${movie.imdbID}`, {
    // Adding method type
    method: "DELETE",
    })
    // Displaying results to console and popup confirmation
    .then(json => {
      console.log(json);
      if(json.status === 200){
        toast.success('Removed from your Library');
      }
    });
  };

  useEffect(()=> {
    const url = `http://localhost:3000/api/reviews` //template string
    
    fetch(url).then(async (response) => {
      setReviews(await response.json());
    }).catch(console.log)

  }, [reviews]); //just on page load

  const removeReview = (movie) => {
    fetch(`http://localhost:3000/api/reviews/${movie.imdbID}`, {
    // Adding method type
    method: "DELETE",
    })
    // Displaying results to console and popup confirmation
    .then(json => {
      console.log(json);
      if(json.status === 200){
        toast.success('Review was removed.');
      }
    });
  };
    if (favorites.length === 0){
        return (
        <div className ='container-fluid movie-app'>
            <div className="App">    
             <Toastr/>    
              </div> 
              <div className = 'row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading = 'My Library'/>
              </div>
              <div className='d-flex flex-wrap'>
              <a>It looks like there are no movies in your library!
            Search for a movie you have watched and add it here!</a>
              </div>
        </div>
        );
    }
    else{
        return  (
            <div className ='container-fluid movie-app'>
              <div className="App">    
             <Toastr/>    
              </div> 
              <div className = 'row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading = 'My Library'/>
              </div>
              <div className='d-flex flex-wrap'>
                <FavoritesMovieList
                movies = {favorites}
                handleFavoritesClick = {removeFavoriteMovie}
                favoriteComponent = {RemoveFavorites}
                playReview = {PlayReview}
                addReview = {AddReview}
                reviews = {reviews}
                />
              </div>
            </div>
        );
    }
};

export default App;
