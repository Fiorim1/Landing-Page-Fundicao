import React from 'react';
import "../styles/Bodyone.css"
import bodyimage from "../assets/bodyimage.png"

const Bodyone = () => {
    return (
        <div className="contentbg">
            <div className="textCenter">
                <h1 className='text'>FAÇA JÁ O SEU</h1>
                <h1 className='budget'>ORÇAMENTO</h1>
            </div>
            <div className="bodyimage">
                <img src={bodyimage} alt="" />
            </div>
        </div>

    );
};

export default Bodyone;
