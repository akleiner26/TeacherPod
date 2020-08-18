import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../../utils/API"
import { notify } from "react-notify-toast"
import "./podModal.css"

const PodModal = (props) => {
    const [podData, setPodData] = useState({
        name: "",
        grade: "",
        slots: "",
        price: "",
        location: "remote"
    });

    const handleInputChange = event => {
        // console.log(event.target.value)

        setPodData({
            ...podData,
            [event.target.name]: event.target.value
        })
    }
//    console.log(podData)

    const savePod = event => {
        event.preventDefault();
        console.log(podData)
        if (podData.grade === "" || podData.price === "" || podData.slots === "" || podData.name === ""){
            let myColor = {background: "#FF0000", text: "#FFFFFF"}
            notify.show("Pod creation failed. Please make sure to include all required details.", "custom", 5000, myColor)
            setPodData({
                        name: "",
                        grade: "",
                        slots: "",
                        price: "",
                        location: ""
                    })  
            return
        }
        // console.log(`id is ${props.id}`)
        let podPrice = document.getElementById("podModalError");

        if (podData.price > 600) {
            podPrice.style.display = "block";
            return;
        }

        podPrice.style.display = "none";
        props.toggle2();

        API.createPod(props.id, podData)
            .then(res => {
                console.log(res.data);
                let myColor = { background: "#ececec", text: "rgba(40,120,111,1)"}
                notify.show("Pod successfully added!", "custom", 5000, myColor )
                setPodData({
                    name: "",
                    grade: "",
                    slots: "",
                    price: "",
                    location: ""
                }) 
                props.refresh();
            })
            .catch(() =>{
                let myColor = {background: "#FF0000", text: "#FFFFFF"}
                notify.show("Pod creation failed. Please make sure to include all required details.", "custom", 5000, myColor)  
         });
    }

    return (
        <Modal isOpen={props.podModal} toggle={props.toggle2} className="">
            <ModalHeader toggle={props.toggle2}>Add a Pod</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="podName"><span className="required">*</span>Pod Name</Label>
                        <Input type="text" name="name" value={podData.name} id="podName" placeholder="Pod Name" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="grade"><span className="required">*</span>Grade Level</Label>
                        <Input type="select" name="grade" id="grade" value={podData.grade} placeholder="Grade" onChange={handleInputChange}>
                            <option value="">Select</option>
                            <option>PreSchool</option>
                            <option>Kindergarten</option>
                            <option>1st Grade</option>
                            <option>2nd Grade</option>
                            <option>3rd Grade</option>
                            <option>4th Grade</option>
                            <option>5th Grade</option>
                            <option>6th Grade</option>
                            <option>7th Grade</option>
                            <option>8th Grade</option>
                            <option>9th Grade</option>
                            <option>10th Grade</option>
                            <option>11th Grade</option>
                            <option>12th Grade</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="slots"><span className="required">*</span>Slots</Label>
                        <Input type="number" name="slots" value={podData.slots} id="slots" placeholder="Pod size" onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price"><span className="required">*</span>Price per week ($0-$600).</Label>
                        <Input type="number" name="price" min="0" value={podData.price} max="600" id="price" placeholder="Price" onChange={handleInputChange} />
                       
                        <FormText id="podModalError">
                            Price must be between $0 - $600
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input type="type" name="location" value={podData.location} id="location" placeholder="Location" onChange={handleInputChange} />
                        <FormText color="muted">
                            Note: Location must be entered as "remote" or by zip code.
                            <br/>
                            <span className="required">*</span>
                            <span>Required</span>
                        </FormText>
                    </FormGroup>
                    <Button className="btnHover hvr-fade" onClick={savePod}>Save</Button>
                    <Button onClick={props.toggle2} className="ml-3 mr-0 btnHover hvr-fade">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default PodModal;