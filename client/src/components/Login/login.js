import React, { useState } from "react";
// import Header from "../Header/header"
import { Container, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, FormText, Row, CardText, Col } from "reactstrap";
import style from "./login.css";
import axios from "axios";

function Login() {
    const [loginInput, setInput] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = event => {
        setInput({
            ...loginInput,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(loginInput);
        axios.post("/api/users/login", loginInput)
            .then(({ data }) => {
                if (data.message === "Logged in") {
                    window.location.replace("/");
                }
            })
    }

    return (
        <>
            {/* <Header /> */}
            <Row className="mt-5 profileCardRow">
                <Col xs="8" className="offset-2">
                    <Container>
                        <Card className="loginCard">
                            <CardTitle className="text-center loginTitle darkGrayText">LOGIN
                    <hr className="line"></hr>
                            </CardTitle>
                            <CardBody>

                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="username" id="exampleEmail" placeholder="test@example.com" onChange={handleInputChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Enter password here" onChange={handleInputChange} />
                                    </FormGroup>
                                    <Button className="btnHover hvr-fade" onClick={handleFormSubmit}>Submit</Button> Don't have an account yet?  <a className="iconHvr-fade2" href="/signup">Signup</a>
                                </Form>
                            </CardBody>
                        </Card>
                    </Container>
                </Col>
            </Row>

        </>
    )
}

export default Login;