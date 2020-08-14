import React from 'react';
import style from "./teacherRow.css"
import {
    Button
} from 'reactstrap';

const TeacherRow = (props) => {
    return (

        <tr className="vertAlign">
            <td className="vertAlign teacherRowImg"><img src={props.thumbnail} alt={props.name}/></td>
            <td className="vertAlign"><a href="/profile" className="teacherTableName">{props.name}</a></td>
            <td className="vertAlign">{props.subject}</td>
            <td className="vertAlign">{props.price}</td>
            <td className="vertAlign">{props.capacity}</td>
            <td className="vertAlign"><Button className="cardBtn cardInfo vertAlign tblHtnHover tblHvr-fade"><i class="fa fa-comments" aria-hidden="true"></i></Button></td>
        </tr>
    );
};

export default TeacherRow;