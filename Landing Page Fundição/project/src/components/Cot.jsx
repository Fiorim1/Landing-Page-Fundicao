import React from 'react';
import "../styles/Cot.css"
import Whatsapp from "../assets/Whatsapp.png"


const Cot = () => {
    return (
        <div className="cotbody">
            <div className='titlecot'>
                <h2>VAMOS FALAR DA SUA COTAÇÃO?</h2>
            </div>
            <button className='buttoncot'><img src={Whatsapp} alt="" className='whatscot' />Faça Seu Orçamento</button>

        </div>

    );
};

export default Cot;
