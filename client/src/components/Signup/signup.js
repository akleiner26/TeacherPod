import React, { useState } from "react";
import { Container, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, FormText, Row, CardText, Col } from "reactstrap";
import "./signup.css";
import axios from "axios";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import API from "../../utils/API"
import { notify } from "react-notify-toast"
import { useMediaQuery } from 'react-responsive';

function Signup() {

    const isDesktopOrLaptop = useMediaQuery(
        { minWidth: 576 }
    )
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [signupInput, setInput] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmed: "",
        isTeacher: false
    })

    let myColor = { background: "#ececec", text: "#FFFFFF"}


    const handleInputChange = event => {
        setInput({
            ...signupInput,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        if (signupInput.isTeacher === "true") {
            signupInput.isTeacher = true;
            let myColor = { background: "#ececec", text: "rgba(40,120,111,1)"}
            notify.show("Welcome to TeachPod " + signupInput.firstName + " " +signupInput.lastName, "custom", 5000, myColor)
        } else {
            signupInput.isTeacher = false;
            let myColor = { background: "#ececec", text: "rgba(40,120,111,1)"}
            notify.show("Welcome to TeachPod " + signupInput.firstName + " " +signupInput.lastName, "custom", 5000, myColor)
        }
        console.log(signupInput);
        if (signupInput.confirmed !== signupInput.password) {
            document.getElementById("error").style.display = "block"
            return
        }
        if (signupInput.isTeacher === true) {
            API.createTeacher(signupInput)
                .then(({ data }) => {
                    if (data.message === "Signed up and logged in") {
                        let myColor = { background: "#ececec", text: "rgba(40,120,111,1)"}
                        notify.show("Welcome to TeachPod " + signupInput.firstName + signupInput.lastName, "custom", 3000, myColor)
                        setTimeout(function (){window.location.replace("/")},1000)
                    }
                })
        } else {
            API.createParent(signupInput)
                .then(({ data }) => {
                    if (data.message === "Signed up and logged in") {
                        let myColor = { background: "#ececec", text: "rgba(40,120,111,1)"}
                        notify.show("Welcome to TeachPod " + signupInput.firstName + signupInput.lastName, "custom", 3000, myColor)
                        setTimeout(function() {window.location.replace("/")},1000)
                    }
                })
        }
    }


    return (
        <>
            <Header loggedIn={loggedIn} id={id} username={username} func={{ setLogin, setUsername, setId }} />


            {isDesktopOrLaptop && <>

                <Row className="mt-5  ">
                    <Col xs="8" className="offset-2">
                        <Container>
                            <Card className="signupCard">
                                <CardTitle className="text-center loginTitle darkGrayText">SIGNUP
                    <hr className="signupLine"></hr>
                                </CardTitle>
                                <CardBody>

                                    <Form>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleFirstName">First Name</Label>
                                                    <Input type="text" name="firstName" id="exampleFirstName" placeholder="First Name" onChange={handleInputChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleLastName">Last Name</Label>
                                                    <Input type="text" name="lastName" id="exampleLastName" placeholder="Last Name" onChange={handleInputChange} />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="username" id="exampleEmail" placeholder="test@example.com" onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword" placeholder="Enter password here" onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="confirmPassword">Confirm Password</Label>
                                            <Input type="password" name="confirmed" id="confirmPassword" placeholder="Confirm password here" onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSelect">Are you a teacher?</Label>
                                            <Input type="select" name="isTeacher" id="teacherSelect" onChange={handleInputChange}>
                                                <option value="false">No</option>
                                                <option value="true">Yes</option>
                                            </Input>
                                        </FormGroup>
                                        <p id="error" style={{ display: "none" }}>Passwords don't match. Please try again.</p>
                                        <Button className="btnHover hvr-fade" onClick={handleFormSubmit}>Submit</Button>
                                        <div className="floatRt">
                                            Already a member? <a className="iconHvr-fade2" href="/login">Login </a>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Container>
                    </Col>
                </Row>

                </>}


            {!isDesktopOrLaptop && <>
                
                    <Row className="mt-5">
                    <Col xs="10" className="text-center offset-1">
                        <Container>
                            <Card className="signupCard">
                                <CardTitle className="text-center loginTitle darkGrayText">SIGNUP
                    <hr className="signupLine"></hr>
                                </CardTitle>
                                <CardBody>

                                    <Form>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleFirstName">First Name</Label>
                                                    <Input type="text" name="firstName" id="exampleFirstName" placeholder="First Name" onChange={handleInputChange} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleLastName">Last Name</Label>
                                                    <Input type="text" name="lastName" id="exampleLastName" placeholder="Last Name" onChange={handleInputChange} />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="username" id="exampleEmail" placeholder="test@example.com" onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" name="password" id="examplePassword" placeholder="Enter password here" onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="confirmPassword">Confirm Password</Label>
                                            <Input type="password" name="confirmed" id="confirmPassword" placeholder="Confirm password here" onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleSelect">Are you a teacher?</Label>
                                            <Input type="select" name="isTeacher" id="teacherSelect" onChange={handleInputChange}>
                                                <option value="false">No</option>
                                                <option value="true">Yes</option>
                                            </Input>
                                        </FormGroup>
                                        <p id="error" style={{ display: "none" }}>Passwords don't match. Please try again.</p>
                                        <Button className="btnHover hvr-fade" onClick={handleFormSubmit}>Submit</Button>
                                        <div >
                                            Already a member? <a className="iconHvr-fade2" href="/login">Login </a>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Container>
                    </Col>
                </Row>
                    
                    </>}
                    <div className="fixed-bottom">
                        <Footer />
                    </div>
                </>
    )
}

export default Signup;