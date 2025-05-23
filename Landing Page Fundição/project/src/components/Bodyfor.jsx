import React from 'react';
import "../styles/Bodyfor.css"


const Bodyfor = () => {
    return (
        <div className="bodyfor">
            <div className="titlefor">
                <h2>NOSSOS PRODUTOS</h2>
            </div>
            <button className='buttonfor'><svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="css-i6dzq1"
                    >
                        <path
                            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                        ></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>BAIXE JÁ NOSSO CATÁLOGO ONLINE</button>

        </div>

    );
};

export default Bodyfor;
