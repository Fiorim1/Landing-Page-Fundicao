import React from 'react';
import '../styles/Bodytwo.css';
import tractororange from "../assets/tractororange.png"
import mine from "../assets/mine.png"
import inds from "../assets/inds.png"
import constciv from "../assets/constciv.png"
import ceram from "../assets/ceram.png"

const Bodytwo = () => {
  return (
    <div className="allcontainer">
      <div className="titlesegmnets">
        <h2>NOSSOS SEGUIMENTOS</h2>
      </div>
      <div className="containerall">
        <div className="container">
          <div className="card_box1">
            <img src={tractororange} alt="" />
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="card_box2">
            <img src={mine} alt="" />
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="card_box3">
            <img src={inds} alt="" />
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="card_box4">
            <img src={constciv} alt="" />
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="card_box5">
            <img src={ceram} alt="" />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodytwo;
