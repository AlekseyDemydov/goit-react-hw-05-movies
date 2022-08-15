import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const List = ({ data, isHome }) => {
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

export default List;

List.propTypes = {
  data: PropTypes.array.isRequired,
  isHome: PropTypes.bool,
};
