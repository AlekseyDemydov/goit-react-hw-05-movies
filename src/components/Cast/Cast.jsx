import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api/api';

const Cast = () => {
  const [data, setData] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.cast(movieId);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  });

  return (
    <ul>
      {data.map(el => (
        <li key={el.id}>
          {el['profile_path'] ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${el['profile_path']}`}
              alt={el.name}
              width="200px"
              height="300px"
            />
          ) : (
            <img
              src="https://dummyimage.com/200x300/faebd7/000000.jpg&text=photo+not+found"
              alt="notPhoto"
              width="200px"
              height="300px"
            />
          )}
          <div>
            <p>
              <b>Name: </b> {el.name}
            </p>
            <p>
              <b>Character: </b> {el.character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
