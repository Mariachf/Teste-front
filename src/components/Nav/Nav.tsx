import React from "react";
import './Nav.scss';
import Certificado from './assets/ShieldCheck.png';
import Caminhão from './assets/Truck.png';
import Cartão from './assets/CreditCard.png';
import Logo from '../assets/logo.png';
import Entrega from './assets/Group.png';
import Curtida from './assets/Heart.png';
import User from './assets/UserCircle.png';
import Compra from './assets/ShoppingCart.png';
import Coroa from './assets/CrownSimple.png';

const Header = () => {
    return(
    <header>
        <nav className="topo">
        <ul>
            <li><img src={Certificado} alt="Selo de certificado" /> Compra <span className="highlight">100% segura</span></li>
            <li><img src={Caminhão} alt="Caminhão de entrega" /><span className="highlight">Frete grátis</span> acima de R$ 200</li>
            <li><img src={Cartão} alt="Cartão de credito"/><span className="highlight">Parcele</span> suas compras</li>
        </ul>
        </nav>

        <div className="linha"></div>
        
        <nav className="nav-principal">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="pesquisa">
                
                <input type="search" placeholder="O que você está buscando?" className="busca" />
            </div>

            <div className="entregas">
                <img src={Entrega} alt="Entraga"/>
                <img src={Curtida} alt="curtida"/>
                <img src={User} alt="Usuário"/>
                <img src={Compra} alt="Carrinho de Compra"/>
            </div>
             
            
        </nav>

        <div className="linha"></div>
            <nav className="categoria">
                <ul>
                    <li><a href="##">Todas Categorias</a></li>
                    <li><a href="##">Supermercado</a></li>
                    <li><a href="##">Livros</a></li>
                    <li><a href="##">Moda</a></li>
                    <li><a href="##">Lançamentos</a></li>
                    <li><a href="##">Oferta do dia</a></li>
                    <li><a href="##"><img src={Coroa} alt="Coroa"/>Assinatura</a></li>
                </ul>
        </nav>
    </header>
    );
   }
   
   export default Header;