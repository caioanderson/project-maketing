import React from 'react';
import { Carousel, Card, Container, Row, Col, Button, Navbar } from 'react-bootstrap';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Verificacao() {
    return (
        <>
            <div className="backHeader">
                <center>
                    <img src="https://i.ibb.co/2cwmzHB/logo1.png"
                        width="90px"
                    />
                </center>
                <Button className="b" variant="info">Entrar</Button>
            </div>
            <div className="principal">
                <center>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                src="https://i.ibb.co/GVD1P3N/Bem-vindo-9.png"
                                alt="Primeiro slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="https://i.ibb.co/yy09fpp/Bem-vindo-5.png"
                                alt="Segundo slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="https://i.ibb.co/558wD98/Bem-vindo-8.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </center>
            </div>

            <div className="divServico">
                <center>
                    <h2><p className="pServico">Principais serviços prestados: </p></h2>
                </center>

            </div>


            <div className="cardSessions">

                <Row>
                    <Col md={{offset: 1}}>
                        <Card border="info" style={{ width: '8rem' }}>
                            <Card.Body>
                                <Card.Title>Lavagem</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card border="info" style={{ width: '8rem' }}>
                            <Card.Body>
                                <Card.Title>Limpeza</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card border="info" style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Title>Enceramento</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card border="info" style={{ width: '9rem' }}>
                            <Card.Body>
                                <Card.Title>Polimento</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>

                
            </div>
            <div className="cardSessions1">
                <Row>
                <Col md={{offset: 1}}>
                        <Card border="danger" style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Title>Cristalização</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card border="danger" style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Title>Vitrificação</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card border="danger" style={{ width: '10rem' }}>
                            <Card.Body>
                                <Card.Title>Revitalização</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card border="danger" style={{ width: '14rem' }}>
                            <Card.Body>
                                <Card.Title>Impermeabilização</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>

                    </Row>


                </div>

            <div className="footer">
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


            <div className="subfooter">
                <center>
                    <p className="pServico">&copy;{new Date().getFullYear()} LV Complete - Todos os direitos reservados</p>
                </center>

            </div>


        </>

    );


}