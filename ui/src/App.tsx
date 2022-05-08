import * as React from 'react';
import './index.css';
import HomeContainer from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export const App = () => (
  <Routes>
    <Route path='/home' element={<HomeContainer />}></Route>
    <Route path='/:shortId'></Route>
  </Routes>
);
