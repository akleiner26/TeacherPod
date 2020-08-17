import React, { useState } from 'react';
import EnrollStudentModal from "../EnrollStudentModal/EnrollStudentModal";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./podRow.css"

const PodRow = (props) => {
    console.log(props)
    console.log(props.students)

    const { buttonLabel } = props;
    const [enrollStudentModal, setEnrollStudentModal] = useState(false);
    const [dropdownOpen, setOpen] = useState(false);

    const toggle4 = () => setEnrollStudentModal(!enrollStudentModal);
    const toggleS = () => setOpen(!dropdownOpen);

    // Opens modal form to enroll a student in a pod
    const openEnrollForm = event => {
        setEnrollStudentModal(true);
    }

    // Opens dropdown with list of students enrolled in pod
    const viewStudents = event => {
        toggleS();
    }

    return (
        <>
            <tr className="vertAlign">
                <td className="vertAlign" onClick={viewStudents} ><strong>{props.name}</strong></td>
                <td className="vertAlign" onClick={viewStudents}>{props.grade}</td>
                <td className="vertAlign" onClick={viewStudents}>{props.location}</td>
                <td className="vertAlign" onClick={viewStudents}>${props.price}/Week</td>
                <td className="vertAlign" onClick={viewStudents}>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggleS} >
                        <DropdownToggle caret className="podDropdown">
                            {props.slots}
                        </DropdownToggle>

                        {props.students.length > 0 ? (
                            <DropdownMenu>
                                {props.students && props.students.map(student => <DropdownItem>{student.firstName} {student.lastName}

                                </DropdownItem>
                                )}

                            </DropdownMenu>
                        ) : (
                                <DropdownMenu>
                                    <DropdownItem>No students enrolled</DropdownItem>
                                </DropdownMenu>
                            )}

                    </ButtonDropdown>
                </td>
                <td className="vertAlign" onClick={viewStudents}>{props.availability}</td>
                {props.teacher === props.id ? (
                    <td className="vertAlign" onClick={viewStudents}>
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