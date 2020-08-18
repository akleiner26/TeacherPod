import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API"

const StudentModal = (props) => {
    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        preferredName: "",
        gradeLevel: "",
        notes: ""
    });

    const handleInputChange = event => {
        // console.log(event.target.value)

        setStudentData({
            ...studentData,
            [event.target.name]: event.target.value
        })
    }

    const saveStudent = event => {
        event.preventDefault();
        console.log(studentData)

        API.createStudent(props.id, studentData)
            .then(res => {
                console.log(res.data);
                props.toggle3();
            })
            .catch(err => console.log(err));
    }

    return (
        <Modal isOpen={props.studentModal} toggle={props.toggle3} className="">
            <ModalHeader toggle={props.toggle3}>Add a Child</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" placeholder="Student's First Name" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" placeholder="Student's Last Name" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="preferredName">Preferred Name</Label>
                        <Input type="text" name="preferredName" id="preferredName" placeholder="Student's Preferred Name" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="grade">Grade</Label>
                        <Input type="text" name="gradeLevel" id="grade" placeholder="Student's Grade Level" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="notes">Notes</Label>
                        <Input type="textarea" name="notes" id="notes" placeholder="Enter any notes that teachers should know about your child." onChange={handleInputChange} />
                    </FormGroup>
                    <Button className="btnHover hvr-fade" onClick={saveStudent}>Save</Button>
                    <Button onClick={props.toggle3} className="ml-3 mr-0 btnHover hvr-fade">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default StudentModal;