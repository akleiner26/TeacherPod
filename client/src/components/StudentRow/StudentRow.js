import React from 'react';

const StudentRow = (props) => {
    return (

        <tr className="vertAlign">
            <td className="vertAlign"><strong>{props.name}</strong></td>
            <td className="vertAlign"><strong>{props.preferredName}</strong></td>
            <td className="vertAlign">{props.gradeLevel}</td>
            <td className="vertAlign">{props.notes}</td>
        </tr>
    );
};

export default StudentRow;