import React from 'react';
import { useFormik } from 'formik';
import './style.css';
import Calc from '../../assets/icon/calc-icon.svg';


function Home () {
    return (
        <div id="container">
            <header id="header-style">
                <h1 id="logo-header">CALCULANDO</h1>
            </header>
            <div id="tutorial-style">
                teste
            </div>
            <main id="main-style">
                <section id="content-style">
                        <p id="content-header">
                            <p><img src={Calc} id="content-icon-header" alt="ícone de cérebro"/>
                            Vamos matar essa curiosidade 
                            </p>
                        </p>
                        <form id="input-container">
                            
                          <div id="input-money">
                            <label>Montante</label>
                            <input type="text" id="input-style" placeholder="Digite aqui o valor recebido"/>
                          </div>

                          <div id="input-object">
                            <label>Objeto ou serviço</label>
                            <input type="text" id="input-style" placeholder="Digite aqui o valor do objeto ou serviço" />
                          </div>

                          <div id="submit-button">
                            <button>Calcular</button>
                          </div>
                        </form>
                        
                </section>
            </main>
            <footer id="footer-style">
                <p>Projeto desenvolvido em React e Node</p>
            </footer>
        </div>
    )
}

export default Home