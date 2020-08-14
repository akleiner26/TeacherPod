import React from "react"
import "./teacherTable.css"
import { Table, Col, Card } from "reactstrap"
import teachers from "../../teachers.json"
import TeacherRow from "../TeacherRow/teacherRow"
import style from "./teacherTable.css"


function TeacherTable(props) {
    return (
        <Col xs="10" className="offset-1 mt-4">
        <Card className="tableMargin">
        <Table className="teacherTable" hover >
            <thead className="teacherHeadRow">
                <tr className="teacherTableHead">
                    <th className="teacherTableHeadTitle cameraIcon"><i class="fa fa-camera-retro" aria-hidden="true"></i></th>
                    <th className="teacherTableHeadTitle">Name</th>
                    <th className="teacherTableHeadTitle">Grade</th>
                    <th className="teacherTableHeadTitle">Price/Week</th>
                    <th className="teacherTableHeadTitle">Pod Capacity</th>
                    <th className="teacherTableHeadTitle">Message</th>
                </tr>
            </thead>
            <tbody className="teacherTable">
                {teachers.map(teacher => <TeacherRow className="teacherTable"
                    key={teacher.id}
                    thumbnail={teacher.thumbnail}
                    name={teacher.name}
                    subject={teacher.subject}
                    price={teacher.price}
                    capacity={teacher.capacity} />
                )}
            </tbody>
        </Table>
        </Card>
        </Col>
    )
}

export default TeacherTable