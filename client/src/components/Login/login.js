import React, { useState } from "react";
import { Container, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, FormText, Row, CardText } from "reactstrap";
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
            .then( ({data}) => {
                if (data.message === "Logged in"){
                    window.location.replace("/");
                }
            })
    }

    return (
        <>
            <Container>
                <Card className="loginCard">
                    <CardTitle className="text-center loginTitle">Login
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
                            <Button onClick={handleFormSubmit}>Submit</Button> Don't have an account yet?  <a href="/signup">Signup</a>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default Login;