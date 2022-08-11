import { Route, Routes } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Component from './Component/Component';
import Home from './Home/Home';

export const App = () => {
  return (
    <Component>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Component>
  );
};
