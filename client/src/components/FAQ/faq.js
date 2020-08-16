import React, { useState } from "react";
import { Container, Collapse, Card, CardTitle, CardBody, Table, Form, FormGroup, Label, Input, Button, FormText, Row, CardText, Col } from "reactstrap";
import "./faq.css";
import Header from "../Header/header"
import Footer from "../Footer/footer"


function FAQ() {
    // For Header functionality
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");

    // For Toggle functionality
    const [isOpen, setIsOpen] = useState(false);
    const toggle1 = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

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
                        <CardBody className="text-center">

                            <div>
                                <Button color="primary" onClick={toggle1} style={{ marginBottom: '1rem' }}>Toggle</Button>
                                <Collapse isOpen={isOpen}>
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Anim pariatur cliche reprehenderit,
                                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                                            nesciunt sapiente ea proident.
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>

                            <div>
                                <Button color="primary" onClick={toggle1} style={{ marginBottom: '1rem' }}>Toggle</Button>
                                <Collapse isOpen={isOpen}>
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Anim pariatur cliche reprehenderit,
                                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                                            nesciunt sapiente ea proident.
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>

                            <div>
                                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                                <Collapse isOpen={isOpen}>
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Anim pariatur cliche reprehenderit,
                                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                                            nesciunt sapiente ea proident.
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>

                            <div>
                                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                                <Collapse isOpen={isOpen}>
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Anim pariatur cliche reprehenderit,
                                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                                            nesciunt sapiente ea proident.
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>

                            <div>
                                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                                <Collapse isOpen={isOpen}>
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Anim pariatur cliche reprehenderit,
                                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                                            nesciunt sapiente ea proident.
                                        </CardBody>
                                    </Card>
                                </Collapse>
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