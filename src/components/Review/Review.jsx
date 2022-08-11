import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../api/api';

const Reviews = () => {
  const [data, setData] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.reviews(movieId);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  });

  if (data.length === 0) return <p>We don't have any reviews for this movie</p>;
  if (data.length !== 0) {
    return (
      <ul>
        {data.map((el, idx) => (
          <li key={idx}>
            <p>
              <b>Author: </b> {el.author}
            </p>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;
