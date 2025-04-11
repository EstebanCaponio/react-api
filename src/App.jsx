import { useEffect, useState } from 'react';
import axios from 'axios';


const endpoint = 'https://www.freetestapi.com/api/v1/actresses';

function App() {

  const [actressesList, setActressesList] = useState([]);

  function fetchActresses() {
    axios.get(endpoint)
      .then(res => (
        setActressesList(res.data),
        console.log(res.data)))
  }

  useEffect(fetchActresses, []);

  return (
    <>
      <div>
        {actressesList.map(actress => (
          <div className='actress-card'>
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
