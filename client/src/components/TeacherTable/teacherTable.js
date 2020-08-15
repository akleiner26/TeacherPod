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
                <tr className="tableHead">
                    <th className="darkGrayText cameraIcon"><i class="fa fa-camera-retro" aria-hidden="true"></i></th>
                    <th className="darkGrayText">Name</th>
                    <th className="darkGrayText">Grade</th>
                    <th className="darkGrayText">Price/Week</th>
                    <th className="darkGrayText">Pod Capacity</th>
                    <th className="darkGrayText">Message</th>
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