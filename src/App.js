import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https:freetestapi.com/api/v1/movies?limit=5')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log("there is something wrong");
      });
  }, []);
  
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">List of Movies</h2>
      <table className="table table-hover table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Director</th>
            <th>Actors</th>
            <th>Plot</th>
            <th>Poster</th>
            <th>Trailer</th>
            <th>Runtime</th>
            <th>Awards</th>
            <th>Country</th>
            <th>Language</th>
            <th>Box Office</th>
            <th>Production</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.genre}</td>
              <td>{movie.rating}</td>
              <td>{movie.director}</td>
              <td>{movie.actor}</td>
              <td>{movie.plot}</td>
              <td>
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  style={{ width: "100px", height: "auto" }} 
                  className="img-fluid" 
                />
              </td>
              <td><a href={movie.trailer} target="_blank" rel="noopener noreferrer">Watch Trailer</a></td>
              <td>{movie.runtime}</td>
              <td>{movie.awards}</td>
              <td>{movie.country}</td>
              <td>{movie.language}</td>
              <td>{movie.boxOffice}</td>
              <td>{movie.production}</td>
              <td><a href={movie.website} target="_blank" rel="noopener noreferrer">Visit Website</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
