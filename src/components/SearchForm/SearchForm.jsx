import { useState } from 'react';
import api from '../../api/api';
import s from './SearchForm.module.css';
import PropTypes from 'prop-types';

const FormSearch = ({ setStatusPage, setData, setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleChangeInput = e => {
    setQuery(e.target.value.trimStart());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') return;
    setSearchParams({ query });

    const fetch = async () => {
      try {
        const response = await api.search(query, 1);
        setData(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={handleChangeInput}
        className={s.input}
      />
      <button type="submit" className={s.searchBtn}></button>
    </form>
  );
};

export default FormSearch;

FormSearch.propTypes = {
  setStatusPage: PropTypes.func,
  setData: PropTypes.func,
  setSearchParams: PropTypes.func,
};
