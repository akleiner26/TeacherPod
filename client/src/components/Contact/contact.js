import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Container, Card, CardTitle, CardBody } from "reactstrap";
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
                    <CardBody>
                        <CardTitle className="text-center ">Creators:
                    </CardTitle>
                        <CardBody className="text-center">
                            <a href="mailto:garybergman00@gmail.com">Gary Bergman </a>
                              {/* <!-- Github --> */}
                              <a  href="https://github.com/Gary-Bergman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"
                                aria-hidden="true"></i> </a>

                           
                            {/* <!-- Email --> */}
                            <a href="mailto:garybergman00@gmail.com"><i className="fa fa-envelope"
                                aria-hidden="true"></i> </a>
                            {/* <!-- LinkedIn --> */}
                            <a href="https://www.linkedin.com/in/gary-bergman/" target="_blank" rel="noopener noreferrer"><i
                                className="fa fa-linkedin" aria-hidden="true"></i> </a>
                
                        
                      
                        </CardBody>

                    </CardBody>
                </Card>
            </Container>



            <Footer />
        </>
    )
}

export default Contact;