import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const Movies = lazy(() => import('./components/Movies'));
const People = lazy(() => import('./components/People'));
const Planets = lazy(() => import('./components/Planets'));

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [movies, setMovies] = useState([]);

  const apiUrl = 'https://swapi.dev/api/';
  const format = '/?format=json';

  useEffect(() => {
	let response;
	let data;
    async function fetchPeople() {
		console.log("Test people");
    	response = await fetch(apiUrl + 'people' + format);
    	data = await response.json();
    	setPeople(data.results);
    }

    async function fetchPlanets() {
      response = await fetch(apiUrl + 'planets' + format);
      data = await response.json();
      setPlanets(data.results);
    }

    async function fetchMovies() {
      response = await fetch(apiUrl + 'films' + format);
      data = await response.json();
      setMovies(data.results);
    }

    fetchPeople();
    fetchPlanets();
    fetchMovies();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/people" element={ <People data={ people } /> }/>
            <Route path="/planets" element={ <Planets data={ planets }/> }/>
            <Route path="/movies" element={ <Movies data={ movies }/> }/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
