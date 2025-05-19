import React from 'react';
import "../styles/History.css"
import Miner from "../assets/Miner.png"


const History = () => {
    return (
        <div className="historyall">
            <aside className='asidehistory'>
                <h2 className='texthistory'>NOSSA HISTÓRIA</h2>
                <p className='phistory'>Na Siderfund, somos especialistas na produção de ferros e aços fundidos de alta qualidade, atendendo às mais rigorosas exigências do mercado industrial. Com uma estrutura robusta e tecnologia de ponta, oferecemos soluções personalizadas que aliam resistência, precisão e excelência técnica. Nosso compromisso é garantir produtos duráveis e eficientes, desenvolvidos com responsabilidade ambiental e foco na satisfação dos nossos clientes.</p>
            </aside>
            <img src={Miner} alt="" className='miner'/>
        </div>
    );
};

export default History;
