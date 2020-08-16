import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API"

const PodModal = (props) => {
    const [podData, setPodData] = useState({
        name: "",
        grade: "",
        slots: "",
        price: "",
        location: ""
    });

    const handleInputChange = event => {
        // console.log(event.target.value)

        setPodData({
            ...podData,
            grade: props.teacher.gradesTaught,
            [event.target.name]: event.target.value
        })
    }

    const savePod = event => {
        event.preventDefault();
        props.toggle2();
        // console.log(podData)
        // console.log(`id is ${props.id}`)

        API.createPod(props.id, podData)
            .then(res => {
                console.log(res.data);
                props.refresh();
            })
            .catch(err => console.log(err));
    }

    return (
        <Modal isOpen={props.podModal} toggle={props.toggle2} className="">
            <ModalHeader toggle={props.toggle2}>Add a Pod</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="podName">Pod Name</Label>
                        <Input type="text" name="name" id="podName" placeholder="Pod Name" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="grade">Grade</Label>
                        <Input type="text" name="grade" id="grade" placeholder="Grade" defaultValue={props.teacher.gradesTaught} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="slots">Slots</Label>
                        <Input type="number" name="slots" id="slots" placeholder="Pod size" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price per week</Label>
                        <Input type="number" name="price" id="price" placeholder="Price" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input type="type" name="location" id="location" placeholder="Location" onChange={handleInputChange} />
                        <FormText color="muted">
                            Note: Location must be entered as "remote" or by zip code.
                        </FormText>
                    </FormGroup>
                    <Button onClick={savePod}>Save</Button>
                    <Button onClick={props.toggle2} className="ml-3 mr-0">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default PodModal;