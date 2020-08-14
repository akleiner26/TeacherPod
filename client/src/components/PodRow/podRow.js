import React from 'react';
import style from "./podRow.css"


const PodRow = (props) => {
    return (

        <tr className="vertAlign">
            <td className="vertAlign">{props.name}</td>
            <td className="vertAlign">{props.grade}</td>
            <td className="vertAlign">{props.slots}</td>
            <td className="vertAlign">{props.price}/Child/Week</td>
            <td className="vertAlign">{props.location}</td>
            <td className="vertAlign">{props.availability}</td>
            <td className="vertAlign"><i class="fa fa-book fa-2x" aria-hidden="true"></i></td>
        </tr>
    );
};

export default PodRow;