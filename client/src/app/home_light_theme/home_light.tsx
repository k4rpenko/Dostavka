"use client"; // Важливо для Next.js 15

import React from "react";
import "./App.scss";
import { FaTruck, FaPlane, FaShip, FaCalculator, FaBoxOpen, FaArrowRight, FaSun } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Header - Тепер він займає всю ширину */}
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

      {/* Основний контейнер (карта + інтерфейс) */}
      <div className="app__main">
        <div className="app__map">
          <img
            src="https://storage.googleapis.com/a1aa/image/vI4-bwjdt5Y-aoYGTFzpqgVBt-H7P5_PbF76KBkoY7Y.jpg"
            alt="Map showing locations in Central Europe"
          />
        </div>

        <div className="app__interface">
          <main className="app__content">
            <h1>Deliver Any Opportunity With One Load At a Time</h1>

            <div className="app__icons">
              <FaTruck />
              <FaPlane />
              <FaShip />
            </div>

            <div className="app__info">
              <FaPlane />
              <span>957 km; 500 kg; 50000грн</span>
            </div>

            <div className="app__form">
              <h2>Calculate your shipment</h2>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="From" />
                  <input type="text" placeholder="To" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Type" />
                  <input type="text" placeholder="Kg" />
                </div>
                <button type="submit">
                  Calculate <FaCalculator />
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
