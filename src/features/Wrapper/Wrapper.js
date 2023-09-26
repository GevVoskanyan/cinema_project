import React from 'react';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

function Wrapper(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Wrapper;
