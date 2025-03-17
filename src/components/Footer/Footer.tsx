import React from "react";
import './Footer.scss';
import Logo from '../assets/logo.png';
import Insta from './assets/instagram.png';
import Face from './assets/facebook.png';
import Linkedin from './assets/linkedin.png';

const Footer = () => {
    return(
        <footer>
            <section className="inscricao">
                <div className="text-insc">
                    <h4>Inscreva-se na nossa newsletter</h4>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                
                <form>
                    <div className="inp-insc">
                        <input type="text" id="name" placeholder="Digite seu nome"></input>
                        <input type="e-mail" id="email" placeholder="Digite seu e-mail" pattern=".+@example\.com"></input>
                        <input type="submit" value="INSCREVER" id="button"></input>
                        
                        
                    </div>
                    <div>
                            <label className="subscribeNews">
                            <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"/>
                            Aceito os termos e condições</label>
                                
                        </div>
                    
                </form>

            </section>

            <section className="rodape">
                <div className="box-primeiro">
                    <img src={Logo} alt="logo da empresa" className="img-logo"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="redes">
                    <a href="##"><img src={Insta} alt="Instagran da empresa"className="img-redes"/></a>
                    <a href="##"><img src={Face} alt="Fecebook da empresa"className="img-redes"/></a>
                    <a href="##"><img src={Linkedin} alt="Linkedin da empresa" className="img-redes"/></a>
                    </div>
                </div>

                <div className="linha-vertical"></div>

                <div className="box-segundo">
                    <div className="text-final-1">
                        <h5>Institucional</h5>
                        <a href="##">Sobre Nós</a>
                        <a href="##">Movimento</a>
                        <a href="##">Trabalhe conosco</a>
                    </div>

                    <div className="text-final-2">
                        <h5>Ajuda</h5>
                        <a href="##">Suporte</a>
                        <a href="##">Fale Conosco</a>
                        <a href="##">Perguntas Frequentes</a>
                    </div>

                    <div className="text-final-3">
                        <h5>Termos</h5>
                        <a href="##">Termos e Condições</a>
                        <a href="##">Politica de Privacidade</a>
                        <a href="##">Troca e Devolução</a>
                    </div>
                </div>
            </section>
            <section className="teste">
                <p>Teste Front-End 2025</p>
            </section>
        </footer>
    );


}

export default Footer;