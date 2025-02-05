"use client"; 

import React from "react";
import "./App.scss";
import { FaTruck, FaPlane, FaShip, FaCalculator, FaBoxOpen, FaArrowRight, FaSun, FaSyncAlt, FaFlag, FaWeight, FaBox } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header__left">
          <span>EN</span>
          <FaSun className="header__icon" />
          <a href="#">About us</a>
        </div>

        <div className="header__center">
          <FaBoxOpen className="header__logo" />
          <span>DOSTAVKA</span>
        </div>

        <div className="header__right">
          <button className="btn">
            Login <FaArrowRight />
          </button>
          <button className="btn">
            Register <FaArrowRight />
          </button>
        </div>
      </header>

      <div className="app__main">
        <div className="app__map">
          <img
            src="/map.jpg"  
            alt="Map showing locations in Central Europe"
          />
        </div>
  


        <div className="shipment-container">
          <h1 className="title">Deliver Any Opportunity With One Load At a Time</h1>

          <div className="icons-container">
            <div className="icon"><FaTruck /></div>
            <div className="icon"><FaPlane /></div>
            <div className="icon"><FaShip /></div>
          </div>

          <div className="shipment-details">
            <FaPlane />
            <span>957 km; 500 kg; 50000грн</span>
          </div>

          <h2 className="subtitle">Calculate your shipment</h2>

          <div className="form-container">
            <div className="input-group">
              <FaSyncAlt className="input-icon" />
              <input type="text" placeholder="From" />
            </div>
            <div className="input-group">
              <FaFlag className="input-icon" />
              <input type="text" placeholder="To" />
            </div>
            <div className="input-group">
              <FaBox className="input-icon" />
              <input type="text" placeholder="Type" />
            </div>
            <div className="input-group">
              <FaWeight className="input-icon" />
              <input type="text" placeholder="Kg" />
            </div>
          </div>

          <button className="calculate-btn">
            Calculate <FaCalculator />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

