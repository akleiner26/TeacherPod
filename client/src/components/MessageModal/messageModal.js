import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API";
import {notify} from "react-notify-toast"

const MessageModal = (props) => {
    const [msgData, setMsgData] = useState({
        receiver: "",
        content: "",
        sender: props.username
    });

    const handleInputChange = event => {
        setMsgData({
            ...msgData,
            [event.target.name]: event.target.value
        })
    }

    const sendMsg = event => {
        event.preventDefault();
        let receiver = "";
        if (props.receiver){
            receiver = props.receiver;
        }
        if (msgData.receiver !== ""){
            receiver = msgData.receiver;
        }
        if (!props.username || receiver == "" || msgData.content == ""){
            let myColor = { background: "#FF0000", text: "#FFFFFF"}
            notify.show("Please login or create an account to send a message.", "custom", 5000, myColor)


            return
        }
        else {
            API.createConversation({participants: [props.username, receiver]})
                .then(res => {
                    if (msgData.content !== "") {
                        API.createMessage({message: {
                            sender: props.username,
                            receiver: receiver,
                            content: msgData.content
                        }
                        })
                            .then(res => {
                                let myColor = { background: "#ececec", text: "rgba(40,120,111,1)"}
                                notify.show("Your message has been sent!", "custom", 5000, myColor)
                                console.log(res);
                                props.toggle();
                            })
                    }
                })
                .catch(function (){
                    let myColor = { background: "#FF0000", text: "#FFFFFF"}
                    notify.show("Conversation already exists. Please go to messages to contact your teacher.", "custom", 5000, myColor)
                });
            }
        }
    console.log(props)

    return (
        <>
        <Modal isOpen={props.messageModal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Start a conversation!</ModalHeader>
            <ModalBody>
           
                <Form>
                    <FormGroup>
                        <Label for="podName">Receipients's Email</Label>
                        <Input type="text" name="receiver" value={props.receiver || msgData.receiver} id="podName" placeholder="Email" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="grade">Send with a message</Label>
                        <Input type="text" name="content" value={msgData.content} id="grade" placeholder="Message" onChange={handleInputChange} />
                    </FormGroup>
                    <Button className="hvr-fade btnHover" onClick={sendMsg}>Send</Button>
                    <Button onClick={props.toggle} className="ml-3 mr-0 hvr-fade btnHover">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
        </>
    );
}

export default MessageModal;