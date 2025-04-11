import { useEffect, useState } from 'react';
import axios from 'axios';


const endpoint = 'https://www.freetestapi.com/api/v1/actresses';
const endpointActors = 'https://www.freetestapi.com/api/v1/actors';

function App() {
  // attrici
  const [actressesList, setActressesList] = useState([]);
  // attori
  const [actorsList, setActorsList] = useState([]);

  // attrici
  function fetchActresses() {
    axios.get(endpoint)
      .then(res => (
        setActressesList(res.data),
        console.log(res.data)))
  }
  // attori
  function fetchActors() {
    axios.get(endpointActors)
      .then(res => (
        setActorsList(res.data),
        console.log(res.data)))
  }

  // attrici
  useEffect(fetchActresses, []);
  // attori
  useEffect(fetchActors, []);

  return (
    <>
      <h1>Schede Attori</h1>

      <div className='container'>
        {actorsList.map(actress => (
          <div key={actress.id} className='actress-card'>
            <img src={actress.image} alt="immagine-attrice" className='actress-image' />
            <h2 className='actress-name'>{actress.name}</h2>
            <p className='actress-info'>{actress.birth_year}</p>
            <p className='actress-info'>{actress.nationality}</p>
            <p className='actress-bio'>{actress.biography}</p>
            <p className='actress-awards'>{actress.awards}</p>
          </div>
        ))}
      </div>


      <h1>Schede Attrici</h1>
      <div className='container'>
        {actressesList.map(actress => (
          <div key={actress.id} className='actress-card'>
            <img src={actress.image} alt="immagine-attrice" className='actress-image' />
            <h2 className='actress-name'>{actress.name}</h2>
            <p className='actress-info'>{actress.birth_year}</p>
            <p className='actress-info'>{actress.nationality}</p>
            <p className='actress-bio'>{actress.biography}</p>
            <p className='actress-awards'>{actress.awards}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
