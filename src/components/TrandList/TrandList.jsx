import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const TrandList = ({ data, isHome }) => {
  const location = useLocation();
  const url = isHome ? 'movies/' : '';

  return (
    <ul>
      {data.map(el => (
        <li key={el.id}>
          <Link to={`${url}${el.id}`} state={{ from: location }}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrandList;

TrandList.propTypes = {
  data: PropTypes.array.isRequired,
  isHome: PropTypes.bool,
};
