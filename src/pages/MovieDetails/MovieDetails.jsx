import { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';

import api from '../../api/api';

import DetailsMovie from '../../components/DetailsMovie/DetailsMovie';
import Component from '../../components/Component/Component';

const MovieDetails = () => {
  const location = useLocation();
  const navBtn = useNavigate();
  const [data, setData] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const dataConversion = obj => {
      const genres = obj.genres.map(genre => genre.name).join(', ');
      const year = obj['release_date'].split('-')[0];
      const score = Math.ceil(obj['vote_average'] * 10);
      const newData = {
        img: `https://image.tmdb.org/t/p/w500/${obj['poster_path']}`,
        title: obj.title,
        genres,
        year,
        score,
        overview: obj.overview,
      };
      setData(newData);
    };

    const fetch = async () => {
      try {
        const response = await api.id(movieId);
        dataConversion(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <Component>
      <button type="button" onClick={() => navBtn(location.state ?? '/')}>
        Go to back
      </button>
      <DetailsMovie data={data} />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </Component>
  );
};

export default MovieDetails;
