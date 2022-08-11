import PropTypes from 'prop-types';

const Component = ({ children }) => {
  return <section>{children}</section>;
};
export default Component;

Component.propTypes = {
  children: PropTypes.array,
};
