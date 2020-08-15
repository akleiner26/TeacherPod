import React from 'react';
import "./teacherRow.css";
import {
    Button
} from 'reactstrap';
import { Link } from "react-router-dom"

const TeacherRow = (props) => {


    return (

        <tr className="vertAlign">
            <td className="vertAlign teacherRowImg">
                {props.image !== "" ? (
                    <img className="teacherThumbnails" src={props.image} alt={props.name} />
                ) : (
                        <img className="teacherThumbnails" src="images/fullSize/profile-placeholder.png" alt={props.name} />
                    )}
            </td>
            <td className="vertAlign teacherTableName aquaText">
                <Link to={"/profile/" + props.key} >
                    <p className="aquaText mb-0">{props.name}</p>
                </Link>
            </td>
            <td className="vertAlign">{props.gradesTaught}</td>
            <td className="vertAlign">${props.price}</td>
            <td className="vertAlign">{props.pods}</td>
            <td className="vertAlign"><Button data-username={props.username} className="cardBtn cardInfo vertAlign darkHtnHover darkHvr-fade"><i class="fa fa-comments" aria-hidden="true"></i></Button></td>
        </tr>
    );
};

export default TeacherRow;