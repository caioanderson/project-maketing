import React, { useState } from 'react';
import api from '../../services/api';
import logo from '../../assets/logo.png'
import { Alert, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Initial({ history }) {
  
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });
   
    const { _id } = response.data;
    localStorage.setItem('user', _id);

    if(response.data.msg === "Vazio"){
      setShow(false);
      setShow1(false);
      setShow2(true);
    }else if(response.data.msg === "Erro"){
      setShow(false);
      setShow2(false);
      setShow1(true);
        
    }else{
     setShow1(false);
     setShow2(false);
      setShow(true);
      
    }
    
  }

  return (
    <>
    <div className="content">
      <img src={logo} alt="LV complete" />
      <p>Lave seu veículo sem <strong>perder tempo</strong></p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit">Enviar</button>


      </form>
      
      <Alert show={show} variant="success">
        E-mail enviado !
      </Alert>
      <Alert show={show1} variant="danger">
        E-mail já cadastrado, verifique seus emails !
      </Alert>
      <Alert show={show2} variant="danger">
        Campo vazio, por favor preencha!
      </Alert>
    </div>

    <div className="footer1">
                <Container>
                    <Row>
                        <Col>
                            <h4 className="pServico">Informações de contato</h4>
                            <ul className="list-unstyled">
                                <li className="pServico">completelv@gmail.com</li>
                                <li className="pServico">completelv@outlook.com</li>
                                <li className="pServico">+55(88)9.9858-9945</li>
                            </ul>
                        </Col>
                        <Col>
                            <h4 className="pServico">Nossas Redes Sociais</h4>
                            <ul className="list-unstyled">
                                <Row><li><a href="#"><h4><FaFacebookF /></h4></a></li>
                                    <li><a href="#"><h4><FaInstagram /></h4></a></li></Row>


                            </ul>
                        </Col>


                    </Row>
                </Container>


            </div>


            <div className="subfooter1">
                <center>
                    <p className="pServico">&copy;{new Date().getFullYear()} LV Complete - Todos os direitos reservados</p>
                </center>

            </div>

    </>
    
  )
}