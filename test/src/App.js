import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import TechPage from './Pages/TechPage/TechPage';
import ClothesPage from './Pages/ClothesPage/ClothesPage';
import AllPage from './Pages/AllPage/AllPage';
import Layout from './components/Layout/Layout';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllPage />} />
          <Route path="tech" element={<TechPage />} />
          <Route path="clothes" element={<ClothesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      </>
    );
  }
}

export default App;
