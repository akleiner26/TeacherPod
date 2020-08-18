import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API";

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
    console.log(props.username)
    const sendMsg = event => {
        event.preventDefault();
        props.toggle();
        console.log(props.receiver)
        let receiver = "";
        if (props.receiver){
            receiver = props.receiver;
        }
        if (msgData.receiver !== ""){
            receiver = msgData.receiver;
        }
        if (!props.username || receiver == "" || msgData.content == ""){
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
                                console.log(res);
                            })
                    }
                })
                .catch(err => console.log(err));
            }
        }
        

    console.log(props)

    return (
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
                    <Button onClick={sendMsg}>Send</Button>
                    <Button onClick={props.toggle} className="ml-3 mr-0">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default MessageModal;