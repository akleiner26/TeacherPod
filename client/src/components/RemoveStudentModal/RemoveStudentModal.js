import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import API from "../../utils/API"
import { notify } from "react-notify-toast"

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


        API.deleteStudentFromPod(props.podId, studentData.studentId)
            .then(res => {
                let myColor = { background: "#ececec", text: "rgba(40,120,111,1)"}
                notify.show("Student successfuly removed from pod!", "custom", 5000, myColor )
                setStudentData({
                    ...studentData,
                    [event.target.name]: event.target.value
                })
            })
            .catch(() => {
                let myColor = {background: "#FF0000", text: "#FFFFFF"}
                notify.show("Unable to remove student from pod.", "custom", 5000, myColor)
            });
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