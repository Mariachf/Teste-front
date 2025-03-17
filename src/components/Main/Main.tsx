import React from "react";
import './Main.scss';
import Slider from '../Slider/Slider'
import Logo from '../assets/logo.png';
import Tec from '../Main/assets/image.png';
import Mercado from '../Main/assets/supermercados 1.png';
import Bebidas from '../Main/assets/whiskey.png';
import Ferramentas from '../Main/assets/ferramentas 1.png';
import Saude from '../Main/assets/cuidados-de-saude 1.png';
import Fit from '../Main/assets/corrida 1.png';
import Moda from '../Main/assets/moda 1.png';
import Produtos from '../Product/Product'


const Main = () => {
    return(
    <main>
       <section className="mercadorias">
          
            <div className="button">
                <a href="##" className="btn" >
                    <img src={Tec} alt="Imagem de produto de tecnologia" />
                </a>

                <span className="highlight">Tecnologia</span>
            </div>
              

            <div className="button-1">
                <a href="##" className="btn-1">
                    <img src={Mercado} alt="Imagem de produto de tecnologia" />
                    
                </a>

                <span className="mercadoria-span">Supermecado</span>
            </div>

            <div className="button-1">
                <a href="##" className="btn-1">
                    <img src={Bebidas} alt="Imagem de produto de tecnologia" />
                    
                </a>

                <span className="mercadoria-span">Bebidas</span>
            </div>
            <div className="button-1">
                <a href="##" className="btn-1">
                    <img src={Ferramentas} alt="Imagem de produto de tecnologia" />
                    
                </a>

                <span className="mercadoria-span">Ferramentas</span>
            </div>
            <div className="button-1">
                <a href="##" className="btn-1">
                    <img src={Saude} alt="Imagem de produto de tecnologia" />
                    
                </a>

                <span className="mercadoria-span">Saúde</span>
            </div>

            <div className="button-1">
                <a href="##" className="btn-1">
                    <img src={Fit} alt="Imagem de produto de tecnologia" />
                    
                </a>

                <span className="mercadoria-span">Esportes e Fitness</span>
            </div>
            <div className="button-1">
                <a href="##" className="btn-1">
                    <img src={Moda} alt="Imagem de produto de tecnologia" />
                    
                </a>

                <span className="mercadoria-span">Moda</span>
            </div>

            
            
       </section>
       
       

       <Produtos/>
       <Slider/>

       <section className="parceria">
            <div className="box-parceria">
                <h3>Parceiros</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
            </div>

            <div className="box-parceria">
                <h3>Parceiros</h3>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button>Confira</button>
            </div>
       </section>

       <section className="marcas">
            <h2 className="text-pag">Navegue por marcas</h2>
           <div className="box-circle">
                <div className="circle"><img src={Logo} alt="logo da marca"/></div>
                <div className="circle"><img src={Logo} alt="logo da marca"/></div>
                <div className="circle"><img src={Logo} alt="logo da marca"/></div>
                <div className="circle"><img src={Logo} alt="logo da marca"/></div>
                <div className="circle"><img src={Logo} alt="logo da marca"/></div>
            </div>
       </section>

       <Produtos/>
       <Slider/>
       
    </main>
    );
   }
   
   export default Main;