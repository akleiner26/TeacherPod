import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const PodModal = (props) => {
    return (
        <Modal isOpen={props.podModal} toggle={props.toggle2} className="">
            <ModalHeader toggle={props.toggle2}>Add a Pod</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="podName">Pod Name</Label>
                        <Input type="text" name="podName" id="podName" placeholder="Pod Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="grade">Grade</Label>
                        <Input type="text" name="grade" id="grade" placeholder="Grade" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="slots">Slots</Label>
                        <Input type="number" name="slots" id="slots" placeholder="Pod size" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">Price per week</Label>
                        <Input type="number" name="price" id="price" placeholder="Price" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input type="type" name="location" id="location" placeholder="Location" />
                        <FormText color="muted">
                            Note: Location must be entered as "remote" or by zip code.
                        </FormText>
                    </FormGroup>
                    <Button onClick={props.saveEdits}>Save</Button>
                    <Button onClick={props.toggle2} className="ml-3 mr-0">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default PodModal;