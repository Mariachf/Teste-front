import React from "react";
import './Header.scss';


const Header = () => {
    return(
    <header>
       <div className="back">
            <h1>Venha conhecer nossas promoções</h1>
            <h3><span className="color">50% Off</span> nos produtos</h3>
            <button>Ver Produtos</button>
       </div>
    </header>
    );
   }
   
   export default Header;