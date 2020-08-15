import React, { useState, useEffect } from "react"
import style from "./teacherProfile.css"
import { Card, Col, Row, CardTitle } from "reactstrap"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import PodTable from "../PodTable/podTable"
import API from "../../utils/API"
import { useParams } from "react-router-dom"

const Profile = (props) => {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [teacher, setTeacher] = useState({
        firstName: "",
        lastName: "",

    })
    const [pods, setPods] = useState([]);
    // let { key } = useParams();
   let key = props.match.params.key

    useEffect(() => {
        API.getTeacher(key)
        .then(res => {
            console.log(res);
                setTeacher(res.data[0])
                console.log(key)
                setPods(res.data[0].pods)
            }
            ).catch(err => console.log(err));
    },[key])
    
    return (
        <>
            <Header loggedIn={loggedIn} username={username} id={id} func={{setLogin, setUsername, setId}} />
            <Row className="mt-5 profileCardRow">
                <Col xs="8" className="offset-2">
                    <Card className="profileCard">
                        <CardTitle className="text-center loginTitle darkGrayText">PROFILE
                    <hr className="line"></hr>
                        </CardTitle>
                        <Row className="m-3">
                            <Col className="proPicCol" xs="6">
                                <img className="img-fluid teacherImage" alt="Lillian Woods" src="images/fullSize/lillianWoodsImg.jpg"></img>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                            <h2>
                                                <strong className="aquaText">{teacher.firstName + " " + teacher.lastName}</strong>
                                            </h2>
                                            </Col>
                                </Row>
                                <p><strong>About: </strong> 
                                {teacher.bio}
                                </p>
                                <a href="/messages" className="iconHvr-fade">
                                <i class="fa fa-envelope mailIcon fa-2x" aria-hidden="true"></i>
                                </a>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <PodTable pods={pods} />
            <Footer />
        </>
    )
}

export default Profile