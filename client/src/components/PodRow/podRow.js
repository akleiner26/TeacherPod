import React, { useState } from 'react';
import EnrollStudentModal from "../EnrollStudentModal/EnrollStudentModal";
import "./podRow.css"

const PodRow = (props) => {
    console.log(props)

    const { buttonLabel } = props;
    const [enrollStudentModal, setEnrollStudentModal] = useState(false);

    const toggle4 = () => setEnrollStudentModal(!enrollStudentModal);

    const openEnrollForm = event => {
        // console.log("clicked")
        setEnrollStudentModal(true);
    }

    return (
        <>
            <tr className="vertAlign">
                <td className="vertAlign"><strong>{props.name}</strong></td>
                <td className="vertAlign">{props.grade}</td>
                <td className="vertAlign">{props.location}</td>
                <td className="vertAlign">${props.price}/Week</td>
                <td className="vertAlign">{props.slots}</td>
                <td className="vertAlign">{props.availability}</td>
                {props.teacher === props.id ? (
                    <td className="vertAlign">
                        <i className="fa fa-book profileIcons hvr-fade" aria-hidden="true" onClick={openEnrollForm}></i>
                    </td>
                ) : (
                        ""
                    )}
            </tr>

            <EnrollStudentModal
                podId={props.podId}
                toggle4={toggle4}
                enrollStudentModal={enrollStudentModal}
                buttonLabe={buttonLabel}
                refresh={props.refresh}
                />
        </>
    );
};

export default PodRow;