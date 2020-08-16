import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer"
import { Card, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./messages.css";
import axios from "axios";
import API from "../../utils/API";
import MessageCard from "../MessageCard/messageCard"


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
            .then(({ data }) => {
                console.log(data)
                if (typeof (data) !== "object") {
                    return
                }
                setConvos(data);
            })
    }

    console.log(Convos);

    return (
        // <div className="fullBackground">
            <div className="overflowMessage fullBackground" >
                <Header loggedIn={loggedIn} id={id} username={username} func={{ setLogin, setUsername, setId }} />
            <Row className="messageRow">
                <Col className="messageCOL col-4">
                    <Card className="sideCard">
                    <CardTitle className="text-center topSpace align-items-center d-flex justify-content-center">
                            Messages</CardTitle>
                        <CardBody className="text-center sideBody">
                             <MessageCard />
                        </CardBody>
                    </Card>

                    </Col>
                    <Col>
                        <Card className="mainMessageCard col-8 shadow">
                            <Card className="received align-items-center d-flex justify-content-center shadow">RECEIVED MESSAGE</Card>
                            <Card className="sent align-items-center d-flex justify-content-center shadow">SENT MESSAGE</Card>
                        </Card>
                        <Form inline className="formBottom">
                            <FormGroup inline className="messageText">
                                <Label for="message" hidden>Message</Label>
                                <Input type="text" name="message" id="messageID" placeholder="Write Message Here" />
                            </FormGroup>
                            <Button id="submitMessage" className="btnHover hvr-fade">Send</Button>

                        </Form>
                    </Col>

                </Row>

                <div className="fixed-bottom">
                    <Footer />
                </div>
            </div>
        // </div>
    )
}

export default Messages