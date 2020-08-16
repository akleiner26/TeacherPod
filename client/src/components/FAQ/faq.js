import React, { useState } from "react";
import { Container, UncontrolledCollapse, Card, CardTitle, CardBody, Button, Row } from "reactstrap";
import "./faq.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useMediaQuery } from 'react-responsive'


function FAQ() {
    // For Header functionality
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");


    return (
        <>
            <Header loggedIn={loggedIn} id={id} username={username} func={{ setLogin, setUsername, setId }} />

            <Row className="mt-5 profileCardRow loginSignupRowSize">
                <Container>
                    <Card className="loginCard">
                        <CardTitle className="text-center loginTitle darkGrayText">FAQ
                    <hr className="line"></hr>
                        </CardTitle>
                        <CardBody className="text-center toggleCardOuter">
                            <div>
                                <Button className="toggleButton" id="toggler" style={{ marginBottom: '1rem' }}>
                                    What is TeachPod?
                                </Button>
                                <UncontrolledCollapse toggler="#toggler">
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            TeachPod is a web-based application designed to help connect students and parents with teachers. With the global complexity of the Covid-19 pandemic, we know that the struggles of education has affected nearly every community. With parents unsure of school openings, we created TeachPod to help facilitate classroom style instruction while kids are unable to attend traditional education programs. Our hope is to ease the transition to at-home learning for primary and high-school education. 
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            <div>
                                <Button className="toggleButton" id="toggler1" style={{ marginBottom: '1rem' }}>
                                    How does TeachPod work?
                                </Button>
                                <UncontrolledCollapse toggler="#toggler1">
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            TeachPod was designed to easily and intuitively match users with teachers in their area, price-range, and education requirements. Simply create an account, filter instructors based on your needs, and find teachers to connect with. When you view a teacher's profile, you can find out more about that teacher and what programs they're currently offering. 
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            <div>
                                <Button className="toggleButton" id="toggler2" style={{ marginBottom: '1rem' }}>
                                    How can I request a pod?
                                </Button>
                                <UncontrolledCollapse toggler="#toggler2">
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            To request a pod, simply message the teacher running the pod and let them know you're interested. The teacher will then be able to discuss all the details necessary and add you to their pod. 
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            <div>
                                <Button className="toggleButton" id="toggler3" style={{ marginBottom: '1rem' }}>
                                    How do I pay for a pod?
                                </Button>
                                <UncontrolledCollapse toggler="#toggler3">
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            Currently, payments will be made via electronic payment directly to the teacher. Once you join a pod, the instructor will send out a message with payment instructions. We are working on adding a PayPal payment system directly to the site. Be on the look out for that soon!
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            <div>
                                <Button className="toggleButton" id="toggler4" style={{ marginBottom: '1rem' }}>
                                    Where do classes take place?
                                </Button>
                                <UncontrolledCollapse toggler="#toggler4">
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            As of now, all classes will be conducted via <a href="https://zoom.us/" target="_blank">Zoom</a>. Simply setup a computer with a webcam, connect with a teacher, and start learning!
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>

                            <div>
                                <Button className="toggleButton" id="toggler5" style={{ marginBottom: '1rem' }}>
                                    What times will classes be taught?
                                </Button>
                                <UncontrolledCollapse toggler="#toggler5">
                                    <Card className="toggleCard">
                                        <CardBody className="toggleText">
                                            You can expect classes to mimic a standard school schedule. Unless otherwise indicated by the pod teacher, all classes will take place Monday-Friday 9am-4pm local time. 
                                        </CardBody>
                                    </Card>
                                </UncontrolledCollapse>
                            </div>
                        </CardBody>
                    </Card>
                </Container>
            </Row>

            <Footer />
        </>
    )
}

export default FAQ;