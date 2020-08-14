import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer"
import { Card, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import style from "./messages.css";

function Messages() {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");


    return (
        <div className="overflowMessage">
            <Header loggedIn={loggedIn} id={id} username={username} func={{setLogin, setUsername, setId}} />


            <Row className="messageRow">
                <Col className="messageCOL col-4">
                    <Card className="sideCard">
                        <CardTitle className="text-center topSpace">
                            Messages</CardTitle>
                        <CardBody className="text-center sideBody">
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                        </CardBody>
                    </Card>

                </Col>
                <Col>
                    <Card className="mainMessageCard col-8">
                        Test
                    </Card>
                    <Form inline  className="formBottom">
                        <FormGroup inline className="messageText">
                            <Label for="message" hidden>Message</Label>
                            <Input type="text" name="message" id="messageID" placeholder="Write Message Here" />
                        </FormGroup>
                        <Button className="btnHover hvr-fade">Send</Button>

                    </Form>
                </Col>

            </Row>

            <div className="fixed-bottom">
                <Footer />
            </div>
        </div>
    )
}

export default Messages