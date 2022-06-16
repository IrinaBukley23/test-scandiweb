import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../Header/Header';

class Layout extends React.Component {
 
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
};

export default Layout;
