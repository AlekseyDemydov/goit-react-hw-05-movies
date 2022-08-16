import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './Movies.module.css';
import api from '../../api/api';
import SearchForm from '../../components/SearchForm/SearchForm';
import List from '../../components/List/List';

import Component from 'components/Component/Component';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const queryURL = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryURL === '') return;
    setPage(1);
    const fetch = async () => {
      try {
        const response = await api.search(queryURL, page);
        setData(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [page, queryURL]);

  return (
    <Component>
      <div className={s.searchBar}>
        <SearchForm setData={setData} setSearchParams={setSearchParams} />
      </div>

      <List data={data} isHome={false} />
    </Component>
  );
};

export default Movies;
