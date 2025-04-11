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
        <ul>
          {actressesList.map(actress => (
            <li key={actress.id}> {actress.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
