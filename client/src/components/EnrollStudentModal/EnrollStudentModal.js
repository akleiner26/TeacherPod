import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API"

const EnrollStudentModal = (props) => {
    const [studentData, setStudentData] = useState({
        parentUsername: "",
        studentFirstName: "",
        studentLastName: ""
        // podId: props.podId
    });

    const handleInputChange = event => {
        // console.log(event.target.value)

        setStudentData({
            ...studentData,
            [event.target.name]: event.target.value
        })
    }

    const enrollStudent = event => {
        event.preventDefault();
        props.toggle4();
        console.log(studentData)

        API.addStudentToPod(props.podId, studentData)
            .then(res => {
                console.log(res.data)
                props.refresh()
            })
            .catch(err => console.log(err));
    }

    return (
        <Modal isOpen={props.enrollStudentModal} toggle={props.toggle4} className="">
            <ModalHeader toggle={props.toggle4}>Enroll a Student</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="studentFirstName">Student's First Name</Label>
                        <Input type="text" name="studentFirstName" id="studentFirstName" placeholder="Student's First Name" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="studentLastName">Student's Last Name</Label>
                        <Input type="text" name="studentLastName" id="studentLastName" placeholder="Student's Last Name" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="parentUsername">Parent's Username</Label>
                        <Input type="text" name="parentUsername" id="parentUsername" placeholder="Parent's Username" onChange={handleInputChange} />
                    </FormGroup>
                    <Button onClick={enrollStudent}>Save</Button>
                    <Button onClick={props.toggle4} className="ml-3 mr-0">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default EnrollStudentModal;