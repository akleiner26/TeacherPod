import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer"
import { Card, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import style from "./messages.css";
import axios from "axios";
import API from "../../utils/API";

function Messages() {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [Convos, setConvos] = useState([{}]);

    useEffect(() => {
        getConvos("lwoods@email.com");
    }, [])

    const getConvos = (user) => {
        API.findAllMessages(user)
            .then( ({ data }) => {
                console.log(data)
                if (typeof(data) !== "object"){
                    return
                }
                setConvos(data);
            })
    }

    console.log(Convos);

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
                                {Convos.map(convo => {
                                    return(
                                    <div>{convo.participants}</div>
                                    )}
                                )}
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