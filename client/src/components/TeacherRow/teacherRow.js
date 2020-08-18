import React, { useState } from 'react';
import "./teacherRow.css";
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import MessageModal from "../MessageModal/messageModal";
import API from "../../utils/API";

const TeacherRow = (props) => {
    const [messageModal, setMessageModal] = useState(false);

    const toggle = () => setTimeout( function () {setMessageModal(!messageModal)},2000);
    // Displays modal with form to add conversation
    const openConversationForm = event => {
        setMessageModal(true);
    }

    const startConvo = () => {
        API.createConversation({ participants: [props.loggedInUser, props.teacherUsername] })
            .then(res => {
                window.location.replace("/messages");
            })
    }

    return (
        <>
            <tr className="vertAlign">
                <td className="vertAlign">
                    <div className="image-cropper">
                        {props.image !== "" ? (
                            <img className="teacherThumbnails" src={props.image} alt={props.name} />
                        ) : (
                                <img className="placeholderThumbnails" src="images/fullSize/profile-placeholder.png" alt={props.name} />
                            )}
                    </div>
                </td>
                <td className="vertAlign teacherTableName aquaText">
                    <Link to={"/profile/" + props.id} >
                        <p className="aquaText mb-0">{props.name}</p>
                    </Link>
                </td>
                <td className="vertAlign">{props.gradesTaught}</td>
                {props.priceMin === props.priceMax ? (
                    <td className="vertAlign">${props.priceMin}</td>
                ): (
                        <td className = "vertAlign">${ props.priceMin } - ${props.priceMax}</td>
                )}

            <td className="vertAlign">{props.pods}</td>
            <td className="vertAlign"><Button onClick={openConversationForm} data-username={props.username} className="cardBtn cardInfo vertAlign darkHtnHover darkHvr-fade"><i className="fa fa-comments" aria-hidden="true"></i></Button></td>
        </tr>
        <MessageModal
            toggle={toggle}
            messageModal={messageModal}
            username={props.loggedInUser}
            receiver={props.teacherUsername}
        />
        </>
    );
};

export default TeacherRow;