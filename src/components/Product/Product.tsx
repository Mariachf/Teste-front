import React from 'react';

import './Product.scss';


const Product = () => {

    return (

        <section className="container">
            <div className="relacionados">
                <div className="linha-1"></div>
                <h2>Produtos relacionados</h2>
                <div className="linha-1"></div>
            </div>

           <div className="nav-produtos">
                <nav>
                    <ul>
                        <li><a href="##"><span className="highlight">Celular</span></a></li>
                        <li><a href="##">acessórios</a></li>
                        <li><a href="##">tablets</a></li>
                        <li><a href="##">NOTEBOOKS</a></li>
                        <li><a href="##">TVS</a></li>
                        <li><a href="##">Ver todos</a></li>
                    </ul>
                </nav>
            </div> 

            
        </section>
    );
}

export default Product;