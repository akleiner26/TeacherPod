import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API"

const RemoveStudentModal = (props) => {
    const [studentData, setStudentData] = useState({
        studentId: ""
    });

    const handleInputChange = event => {
        // console.log(event.target.value)

        setStudentData({
            ...studentData,
            [event.target.name]: event.target.value
        })
    }

    const removeStudent = event => {
        event.preventDefault();
        props.toggle5();
        console.log(studentData.studentId)
        console.log(props.podId)

        API.deleteStudentFromPod(props.podId, studentData.studentId)
            .then(res => {
                console.log("About to console log deleted students from pod....")
                console.log(res)
                console.log("Just console logged deleted students.")
                console.log(res.data)
                props.refresh()
            })
            .catch(err => console.log(err));
    }

    return (
        <Modal isOpen={props.removeStudentModal} toggle={props.toggle5} className="">
            <ModalHeader toggle={props.toggle5}>Remove a Student</ModalHeader>
            <ModalBody>
                <Form>
                <FormGroup>
                        <Label for="student">Select Student to Remove</Label>
                        <Input type="select" name="studentId" onChange={handleInputChange}>

                            <option value="">Select</option>
                            {props.students && props.students.map(student =>
                            <option key={student._id} value={student._id}>{student.firstName} {student.lastName}</option>
                            )}
                        
                        </Input>
                    </FormGroup>
                    <Button onClick={removeStudent} className="btnHover hvr-fade">Confirm</Button>
                    <Button onClick={props.toggle5} className="ml-3 mr-0 btnHover hvr-fade">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default RemoveStudentModal;