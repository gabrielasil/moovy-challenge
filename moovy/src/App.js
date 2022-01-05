import React, { useEffect, useState, Component } from "react";
import Toastr from "./components/Toastr";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import RemoveFavorites from "./components/RemoveFavorites";
import AddReview from "./components/AddReview";
import FavoritesMovieList from "./components/FavoritesMovieList";
import { toast } from "react-toastify";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=201f1cda` //template string
    
    const response = await fetch(url);
    const responseJson = await response.json(); //converts http response into json

    if(responseJson.Search){ //search only if its a value
      setMovies(responseJson.Search);
    }
    
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(()=> {
    const url = `http://localhost:3000/api/moovy` //template string
    
    fetch(url).then(async (response) => {
      setFavorites(await response.json());
    }).catch(console.log)

  }, [favorites]); //just on page load

  const addFavoriteMovie = (movie) => {
    fetch("http://localhost:3000/api/moovy", {
      // Adding method type
      method: "POST",
      
      // Adding body or contents to send
      body: JSON.stringify({
          movieID: movie.imdbID
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

  // Displaying popups according to the response status
    .then(json => {
      if(json.status === 201){
        toast.success('Added to your Library');
      }else{
        toast.error('The movie is already on your Library');
      }
    });
  };

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

  return  (
  <div className ='container-fluid movie-app'>
    <div className="App">    
   <Toastr/>    
    </div> 
    <div className = 'row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading = 'Moovy'/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className='d-flex flex-wrap'>
      <MovieList 
      movies = {movies} 
      handleFavoritesClick = {addFavoriteMovie}
      favoriteComponent = {AddFavorites}/>
    </div>
    <div className = 'row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading = 'My Library'/>
    </div>
    <div className='d-flex flex-wrap'>
      <FavoritesMovieList
      movies = {favorites}
      handleFavoritesClick = {removeFavoriteMovie}
      favoriteComponent = {RemoveFavorites}
      addReview = {AddReview}
      />
    </div>
  </div>
  );
};

export default App;
