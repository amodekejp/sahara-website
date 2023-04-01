import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <span className="welcome">
          Welcome
          to SAHARA RESTAURANT!
        </span>
        <section className="animation">
          <div className="moving-text">
            <div>We are here to Serve You!</div>
          </div>
          <div className="logo"><div>Your Happiness is Our Piority!</div></div>
          <div className="new1"><div>Giving the Best is Our Mission!</div></div>
        </section>
      </div>
      <div className="main-name">
        <span className="main-logo hidden">
          {' '}
          <img
            className="home-logo"
            src="https://res.cloudinary.com/dtqrb1kbg/image/upload/v1679979057/photo_2023-03-28_05-49-12_ejgxr3.jpg"
            alt="home-logo"
          />
        </span>
        <h2 className="name font-mono">SAHARA</h2>
      </div>
      <div className="home_body">
        <small>FOOD FOR EVERY MOOD!</small>
      </div>
      <div
        className="flex flex-row justify-between gap-4"
        id="home-btn-container"
      >
        <Link
          to="/products"
          className="border-none text-white text-center rounded-lg py-3 px-3 bg-orange-500 shadow-2xl shadow-slate-500/50 hover:bg-transparent hover:shadow-red-800
        hover:text-white hover:scale-y-125 font-mono font-extrabold	w-60 active:bg-red-700 focus:outline-none focus:ring focus:bg-orange-400 focus:ring-teal-300"
        >
          {' '}Foods
        </Link>
        <Link
          to="/drinks"
          className="border-none text-white text-center rounded-lg py-3 px-3  bg-transparent shadow-lg shadow-orange-500/50 hover:bg-orange-500	 hover:shadow-sky-900
        hover:text-white hover:scale-y-125 font-mono  font-extrabold	w-60 active:bg-red-700 focus:outline-none focus:ring focus:bg-orange-400 focus:ring-red-500"
        >
          Drinks{' '}
        </Link>
      </div>
    </div>
  );
};

export default Home;
