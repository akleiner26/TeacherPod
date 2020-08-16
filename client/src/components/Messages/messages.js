import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer"
import { Card, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./messages.css";
import axios from "axios";
import API from "../../utils/API";
import MessageCard from "../MessageCard/messageCard";
import DisplayMessage from "../DisplayMessage/displayMessage";
import MessageModal from "../MessageModal/messageModal";


function Messages() {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [Convos, setConvos] = useState([]);
    const [messages, setMessages] = useState([]);
    const [receiver, setReceiver] = useState("");
    const [content, setContent] = useState("");
    const [messageModal, setMessageModal] = useState(false);

    useEffect(() => {
        if (username == "") {
            return
        }
        getConvos(username);
    }, [username, messageModal])

    useEffect(() => {
        if (receiver == "") {
            return
        }
        API.findMessageHistory(username, receiver)
            .then(res => {
                console.log(res.data[0].messengers)
                setMessages(res.data[0].messengers);
            })
    }, [receiver, messages])

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

    const handleInputChange = event => {
        setContent(event.target.value);
    }

    const postMessage = event => {
        event.preventDefault();
        if (receiver == "" || content == "") {
            return
        }
        API.createMessage(
            {
                message: {
                    receiver: receiver,
                    sender: username,
                    content: content
                }
            }).then(() => {
                setContent("");
                console.log(username, receiver)
                API.findMessageHistory(username, receiver)
                    .then(res => {
                        console.log(res.data[0].messengers)
                        setMessages(res.data[0].messengers);
                    })
            })
    }

    const toggle = () => setMessageModal(!messageModal);

    // Displays modal with form to add conversation
    const openConversationForm = event => {
        setMessageModal(true);
    }

    return (
        // <div className="fullBackground">
        <div className="overflowMessage fullBackground" >
            <Header loggedIn={loggedIn} id={id} username={username} func={{ setLogin, setUsername, setId }} />
            <Row className="messageRow">
                <Col className="messageCOL col-4">
                    <Card className="sideCard">
                        <CardTitle className="text-center topSpace align-items-center d-flex justify-content-center">
                            Messages
                            <i onClick={openConversationForm} class="fa fa-plus profileIcons hvr-fade" aria-hidden="true" style={{ position: "absolute", top: 0, left: 20 }}></i>
                        </CardTitle>
                        <CardBody className="text-center sideBody">
                            {Convos && Convos.map(convo => {
                                console.log(convo);
                                let personText = "";
                                if (!convo.participants) {
                                    return
                                }
                                convo.participants.forEach(person => {
                                    if (person !== username) {
                                        // console.log("Found")
                                        personText = person;
                                    }
                                })
                                return <MessageCard person={personText} setReceiver={setReceiver} />
                            }
                            )}
                        </CardBody>
                    </Card>

                </Col>
                <Col>
                    <Card className="mainMessageCard col-8 shadow">
                        {messages == "" ?
                            <>
                                <div>
                                    Click on a user on the left to view conversation.
                                </div>
                            </>
                            :
                            messages && messages.map(message => {
                                let text = message.content;
                                console.log(text);
                                if (message.sender == username) {
                                    return <DisplayMessage text={text} class={"sent align-items-center d-flex justify-content-center shadow"} />
                                }
                                else {
                                    return <DisplayMessage text={text} class={"received align-items-center d-flex justify-content-center shadow"} />
                                }
                            })
                        }
                    </Card>
                    <Form inline className="formBottom" onSubmit={postMessage}>
                        <FormGroup inline className="messageText">
                            <Label for="content" hidden>Message</Label>
                            <Input type="text" value={content} name="content" id="messageID" placeholder="Write Message Here" onChange={handleInputChange} />
                        </FormGroup>
                        <Button id="submitMessage" className="btnHover hvr-fade">Send</Button>

                    </Form>
                </Col>

            </Row>

            <div className="fixed-bottom">
                <Footer />
                <MessageModal
                    toggle={toggle}
                    messageModal={messageModal}
                    username={username}
                />
            </div>
        </div>
        // </div>
    )
}

export default Messages