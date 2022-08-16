import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const List = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={{ from: location }}>
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
