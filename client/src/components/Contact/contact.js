import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Table, Container, Card, CardTitle, CardBody } from "reactstrap";
import style from "./contact.css";

function Contact() {
    return (
        <>
            <Header />


            <Container>
                <Card className="loginCard">
                    <CardTitle className="text-center loginTitle">Contact
                    <hr className="line"></hr>
                    </CardTitle>



                    <CardBody className="text-center">

                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Creators</th>
                                    <th>Github</th>
                                    <th>LinkedIn</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Gary Bergman</th>
                                    <td> <a href="https://github.com/Gary-Bergman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github contactIcons"
                                        aria-hidden="true"></i> </a></td>
                                    <td>
                                        <a href="https://www.linkedin.com/in/gary-bergman/" target="_blank" rel="noopener noreferrer"><i
                                            className="fa fa-linkedin contactIcons" aria-hidden="true"></i> </a>
                                    </td>
                                    <td>
                                        <a href="mailto:garybergman00@gmail.com"><i className="fa fa-envelope contactIcons"
                                            aria-hidden="true"></i> </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Andrew Kleiner</th>
                                    <td>
                                        <a href="https://github.com/akleiner26" target="_blank" rel="noopener noreferrer"><i className="fa fa-github contactIcons"
                                            aria-hidden="true"></i> </a>
                                    </td>
                                    <td>
                                        <a href="https://www.linkedin.com/in/andrew-kleiner-0334b994" target="_blank" rel="noopener noreferrer"><i
                                            className="fa fa-linkedin contactIcons" aria-hidden="true"></i> </a>
                                    </td>
                                    <td>
                                        <a href="mailto:AndrewJKleiner@gmail.com"><i className="fa fa-envelope contactIcons"
                                            aria-hidden="true"></i> </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Esther Min</th>
                                    <td>
                                        <a href="https://github.com/jungjungie" target="_blank" rel="noopener noreferrer"><i className="fa fa-github contactIcons"
                                            aria-hidden="true"></i> </a>
                                    </td>
                                    <td>
                                        <a href="https://www.linkedin.com/in/esther-j-min/" target="_blank" rel="noopener noreferrer"><i
                                            className="fa fa-linkedin contactIcons" aria-hidden="true"></i> </a>
                                    </td>
                                    <td>
                                        <a href="mailto:estherjmin@gmail.com"><i className="fa fa-envelope contactIcons"
                                            aria-hidden="true"></i> </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Wesley Tejeda</th>
                                    <td>
                                        <a href="https://github.com/WesleyTejeda" target="_blank" rel="noopener noreferrer"><i className="fa fa-github contactIcons"
                                            aria-hidden="true"></i> </a>
                                    </td>
                                    <td>
                                        <a href="https://www.linkedin.com/in/wesley-tejeda-574a641a9/" target="_blank" rel="noopener noreferrer"><i
                                            className="fa fa-linkedin contactIcons" aria-hidden="true"></i> </a>
                                    </td>
                                    <td><a href="mailto:wesley.tejeda95@gmail.com"><i className="fa fa-envelope contactIcons"
                                        aria-hidden="true"></i> </a>

                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>

                </Card>
            </Container>

            <Footer />
        </>
    )
}

export default Contact;