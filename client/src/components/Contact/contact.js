import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Row, Table, Container, Card, CardTitle, CardBody, Col } from "reactstrap";
import style from "./contact.css";


function Contact() {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");

    return (
        <>
            <Header loggedIn={loggedIn} username={username} id={id} func={{ setLogin, setUsername, setId }} />

            <Row className="mt-5 profileCardRow loginSignupRowSize">
                <Container>
                    <Card className="loginCard">
                        <CardTitle className="text-center loginTitle darkGreyText">CONTACT
                    <hr className="line"></hr>
                        </CardTitle>

                        {/* <Col xs="10" className="offset-1 mt-4"> */}
                            <CardBody className="text-center">
                                <Card className="tableMargin">
                                    <Table className="teacherTable" hover>
                                        <thead className="teacherTableHead teacherHeadRow">
                                            <tr className="darkGrayText">
                                                <th>Creators</th>
                                                <th>Github</th>
                                                <th>LinkedIn</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="aquaText" scope="row">Gary Bergman</th>
                                                <td> <a href="https://github.com/Gary-Bergman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github contactIcons iconHvr-fade2"
                                                    aria-hidden="true"></i> </a></td>
                                                <td>
                                                    <a href="https://www.linkedin.com/in/gary-bergman/" target="_blank" rel="noopener noreferrer"><i
                                                        className="fa fa-linkedin contactIcons iconHvr-fade2" aria-hidden="true"></i> </a>
                                                </td>
                                                <td>
                                                    <a href="mailto:garybergman00@gmail.com"><i className="fa fa-envelope contactIcons iconHvr-fade2"
                                                        aria-hidden="true"></i> </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="aquaText" scope="row">Andrew Kleiner</th>
                                                <td>
                                                    <a href="https://github.com/akleiner26" target="_blank" rel="noopener noreferrer"><i className="fa fa-github contactIcons iconHvr-fade2"
                                                        aria-hidden="true"></i> </a>
                                                </td>
                                                <td>
                                                    <a href="https://www.linkedin.com/in/andrew-kleiner-0334b994" target="_blank" rel="noopener noreferrer"><i
                                                        className="fa fa-linkedin contactIcons iconHvr-fade2" aria-hidden="true"></i> </a>
                                                </td>
                                                <td>
                                                    <a href="mailto:AndrewJKleiner@gmail.com"><i className="fa fa-envelope contactIcons iconHvr-fade2"
                                                        aria-hidden="true"></i> </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="aquaText" scope="row">Esther Min</th>
                                                <td>
                                                    <a href="https://github.com/jungjungie" target="_blank" rel="noopener noreferrer"><i className="fa fa-github contactIcons iconHvr-fade2"
                                                        aria-hidden="true"></i> </a>
                                                </td>
                                                <td>
                                                    <a href="https://www.linkedin.com/in/esther-j-min/" target="_blank" rel="noopener noreferrer"><i
                                                        className="fa fa-linkedin contactIcons iconHvr-fade2" aria-hidden="true"></i> </a>
                                                </td>
                                                <td>
                                                    <a href="mailto:estherjmin@gmail.com"><i className="fa fa-envelope contactIcons iconHvr-fade2"
                                                        aria-hidden="true"></i> </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="aquaText" scope="row">Wesley Tejeda</th>
                                                <td>
                                                    <a href="https://github.com/WesleyTejeda" target="_blank" rel="noopener noreferrer"><i className="fa fa-github contactIcons iconHvr-fade2"
                                                        aria-hidden="true"></i> </a>
                                                </td>
                                                <td>
                                                    <a href="https://www.linkedin.com/in/wesley-tejeda-574a641a9/" target="_blank" rel="noopener noreferrer"><i
                                                        className="fa fa-linkedin contactIcons iconHvr-fade2" aria-hidden="true"></i> </a>
                                                </td>
                                                <td>
                                                    <a href="mailto:wesley.tejeda95@gmail.com"><i className="fa fa-envelope contactIcons iconHvr-fade2"
                                                        aria-hidden="true"></i> </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card>
                            </CardBody>
                        {/* </Col> */}
                    </Card>
                </Container>
            </Row>

            <div className="fixed-bottom">
                <Footer />
            </div>
        </>
    )
}

export default Contact;