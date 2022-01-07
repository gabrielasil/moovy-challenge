import React, { useEffect, useState} from "react";
import {useStateIfMounted} from "use-state-if-mounted";
import Toastr from "../components/Toastr";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavorites from "../components/AddFavorites";
import { toast } from "react-toastify";

const App = () => {
  const [movies, setMovies] = useStateIfMounted([]);
  const [favorites, setFavorites] = useStateIfMounted([]);
  const [searchValue, setSearchValue] = useStateIfMounted('');

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=201f1cda` //template string
    const response = await fetch(url);
    const responseJson = await response.json(); //converts http response into json

    if(responseJson.Search && movies){ //search only if its a value
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
          movieID: movie.imdbID,
          isReview: 0
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
  if(movies === []){
    return  (
        <div className ='container-fluid movie-app'>
        <div className="App">    
         <Toastr/>    
          </div> 
          <div className = 'row d-flex align-items-center mt-4 mb-4'>
            <MovieListHeading heading = 'Search'/>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
          </div>
          <a>We couldn´t find the movies you were lookin for :( </a>
        </div>
    );
  }else if (searchValue === ''){
    return  (
      <div className ='container-fluid movie-app'>
      <div className="App">    
       <Toastr/>    
        </div> 
        <div className = 'row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading = 'Search'/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <a>Type a movie name to search </a>
      </div>
    );
  }else{
    return  (
        <div className ='container-fluid movie-app'>
          <div className="App">    
         <Toastr/>    
          </div> 
          <div className = 'row d-flex align-items-center mt-4 mb-4'>
            <MovieListHeading heading = 'Search'/>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
          </div>
          <div className='d-flex flex-wrap'>
            <MovieList 
            movies = {movies} 
            handleFavoritesClick = {addFavoriteMovie}
            favoriteComponent = {AddFavorites}/>
          </div>
        </div>
    );
  }
};

export default App;
