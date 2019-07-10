import React, { Fragment } from 'react';
import './styles.scss';
import Menu from '../../Components/Menu'

const Home = () => {
  return (
    <Fragment>
      <div className="HomeContainer">
        <Menu />
      </div>
      <div style={{height: '70px', width: '100%'}}></div>

      <div className="SecondPage">
      </div>
      <div style={{height: '70px', width: '100%'}}></div>
      <div className="ThirdPage"></div>
    </Fragment>
  );
}

export default Home;
