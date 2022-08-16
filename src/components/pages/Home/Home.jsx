import { useState, useEffect } from 'react';
import Component from '../../Component/Component';
import List from '../../List/List';
import api from '../../../api/api';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.trend(page);
        setData(response);
      } catch (error) {
        console.log(error);
        setPage(1);
      }
    };
    fetch();
  }, [page]);
  return (
    <Component>
      <h1>Trending today</h1>
      <List data={data} isHome={true} />
    </Component>
  );
};

export default Home;
