import React, { useState } from "react";
import { Table, Col, Card } from "reactstrap";
import StudentRow from "../StudentRow/StudentRow";
import API from "../../utils/API"

function StudentTable(props) {
    const [students, setStudents] = useState([]);

    if (!props.isTeacher) {
        API.getParent(props.id)
            .then(res => {
                // console.log(res);
                setStudents(res.data[0].students)
            })
            .catch(err => console.log(err));
    }

    return (
        <Col xs="10" className="offset-1 mt-4">
            <Card className="tableMargin text-center">
                <Table hover >
                    <thead className="tableHead">
                        <tr className="darkGrayText">
                            <th>Student Name</th>
                            <th>Preferred Name</th>
                            <th>Grade</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.map(student => {
                            let name = student.firstName + " " + student.lastName;

                            return <StudentRow className="podTable"
                                key={student._id}
                                name={name}
                                preferredName={student.preferredName}
                                gradeLevel={student.gradeLevel}
                                notes={student.notes}
                            />
                        }
                        )}
                    </tbody>
                </Table>
            </Card>
        </Col>
    )
}

export default StudentTable;