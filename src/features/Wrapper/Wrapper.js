import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

function Wrapper(props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Wrapper;
