import React from 'react';
import "./podRow.css"


const PodRow = (props) => {
    return (

        <tr className="vertAlign">
            <td className="vertAlign"><strong>{props.name}</strong></td>
            <td className="vertAlign">{props.grade}</td>
            <td className="vertAlign">{props.slots}</td>
            <td className="vertAlign">{props.price}/Child/Week</td>
            <td className="vertAlign">{props.location}</td>
            <td className="vertAlign">{props.availability}</td>
            <td className="vertAlign iconHvr-fade2"><i class="fa fa-book fa-2x" aria-hidden="true"></i></td>
        </tr>
    );
};

export default PodRow;