import React, { useState } from "react";
import { Container,UncontrolledCollapse, Collapse, Card, CardTitle, CardBody, Table, Form, FormGroup, Label, Input, Button, FormText, Row, CardText, Col } from "reactstrap";
import "./faq.css";
import Header from "../Header/header"
import Footer from "../Footer/footer"


function FAQ() {
    // For Header functionality
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");


    return (
        <>
            <Header loggedIn={loggedIn} id={id} username={username} func={{ setLogin, setUsername, setId }} />

            <Row className="mt-5 profileCardRow loginSignupRowSize">
                <Container>
                    <Card className="loginCard">
                        <CardTitle className="text-center loginTitle darkGreyText">CONTACT
                    <hr className="line"></hr>
                        </CardTitle>

                        {/* <Col xs="10" className="offset-1 mt-4"> */}
                        <CardBody className="text-center toggleCardOuter">

                            <div>
                                <Button className="toggleButton" id="toggler1" style={{ marginBottom: '1rem' }}>
                                    Toggle
                                </Button>
                                <UncontrolledCollapse toggler="#toggler1">
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                            dignissimos esse fuga! Minus, alias.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            <div>
                                <Button className="toggleButton" id="toggler2" style={{ marginBottom: '1rem' }}>
                                    Toggle
                                </Button>
                                <UncontrolledCollapse toggler="#toggler2">
                                <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                            dignissimos esse fuga! Minus, alias.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            <div>
                                <Button className="toggleButton" id="toggler3" style={{ marginBottom: '1rem' }}>
                                    Toggle
                                </Button>
                                <UncontrolledCollapse toggler="#toggler3">
                                <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                            dignissimos esse fuga! Minus, alias.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            <div>
                                <Button className="toggleButton" id="toggler4" style={{ marginBottom: '1rem' }}>
                                    Toggle
                                </Button>
                                <UncontrolledCollapse toggler="#toggler4">
                                <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                            dignissimos esse fuga! Minus, alias.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            <div>
                                <Button className="toggleButton" id="toggler5" style={{ marginBottom: '1rem' }}>
                                    Toggle
                                </Button>
                                <UncontrolledCollapse toggler="#toggler5">
                                <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                                            similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                                            dignissimos esse fuga! Minus, alias.
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            


                        </CardBody>
                        {/* </Col> */}
                    </Card>
                </Container>
            </Row>

            <Footer />
        </>
    )
}

export default FAQ;