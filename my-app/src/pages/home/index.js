import React from 'react';
import { useState } from 'react';
import './style.css';
import Calc from '../../assets/icon/calc-icon.svg';

function Home () {


const [values, setValues] = useState ({
    amount: '',
    objectService: '',
    valueObjectService: '',
    result: ''
})


const [errors, setErrors] = useState ({})

const handleChange = (evt) => {
  evt.preventDefault()
    setValues ({
      ...values,
      [evt.target.name] : evt.target.value
    })
}

function validate () {
  let errors = {};
  if (!values.amount) {
    errors.amount = "*Preencha com um valor válido"
  }
  if (!values.objectService) {
    errors.objectService = "*Preencha com um valor válido"
  }
  if (!values.valueObjectService) {
    errors.valueObjectService = "*Preencha com um valor válido"
  }
  return errors
}

const handleSubmit = (evt) => {
  evt.preventDefault ();
  setErrors(validate());
}



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
                            <img src={Calc} id="content-icon-header" alt="ícone de cérebro"/>
                            Vamos matar essa curiosidade 
                            
                        </p>

                        <form id="input-container" onSubmit={e => handleSubmit(e)}>
                            
                          <div id="input-money">
                            <label htmlFor="amout">Montante</label>
                            <input 
                              type="text" 
                              id="input-style"
                              name="amount"
                              onChange={e => handleChange (e)}
                              placeholder="Digite aqui o valor recebido"
                              />
                              {errors.amount && <p>{errors.amount}</p>}
                          </div>

                          <div id="input-object">
                            <label htmlFor="objectService">Objeto ou serviço</label>
                            <input 
                              type="text" 
                              id="input-style"
                              name="objectService" 
                              onChange={handleChange}
                              placeholder="Digite o nome do objeto ou serviço" 
                              />
                              {errors.objectService && <p>{errors.objectService}</p>}
                          </div>

                          <div id="input-money">
                            <label htmlFor="valueObjectService">Valor do objeto ou serviço</label>
                            <input 
                              type="text" 
                              id="input-style" 
                              name="valueObjectService"
                              onChange={handleChange}
                              placeholder="Digite aqui o valor do objeto ou serviço" 
                              />
                              {errors.valueObjectService && <p>{errors.valueObjectService}</p>}
                          </div>

                          <div id="submit-button">
                            <button>Calcular</button>
                          </div>
                        </form>
                        <div id="result">
                        </div>
                        
                </section>
            </main>
            <footer id="footer-style">
                <p>Projeto desenvolvido em React e Node </p>
            </footer>
        </div>
    )
}

export default Home