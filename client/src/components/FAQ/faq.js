import React, { useState } from "react";
import { Container, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, FormText, Row, CardText, Col } from "reactstrap";
import "./faq.css";
import Header from "../Header/header"
import Footer from "../Footer/footer"


function FAQ() {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");

    return (
        <>
            <Header loggedIn={loggedIn} id={id} username={username} func={{ setLogin, setUsername, setId }} />
            {/* <Row className="mt-5 profileCardRow loginSignupRowSize">
                <Col xs="8" className="offset-2">
                    <Container className>
                        <Card className="loginCard">
                            <CardTitle className="text-center loginTitle darkGrayText">LOGIN
                    <hr className="line"></hr>
                            </CardTitle>
                            <CardBody>

                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="username" id="exampleEmail" placeholder="test@example.com" onChange={handleInputChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Enter password here" onChange={handleInputChange} />
                                    </FormGroup>
                                  
                                        <Button className="btnHover hvr-fade" onClick={handleFormSubmit}>Submit</Button>
                                        <div className="floatRt">
                                            Don't have an account yet?<a className="iconHvr-fade2" href="/signup"> Signup</a>
                                        </div>


                         


                                </Form>
                            </CardBody>
                        </Card>
                    </Container>
                </Col>
            </Row> */}
            <Footer />
        </>
    )
}

export default FAQ;