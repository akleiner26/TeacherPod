import React from "react"
import "./teacherTable.css";
import { Table, Col, Card } from "reactstrap"
import "./teacherTable.css"


function TeacherTable(props) {
    return (
        <Col xs="10" className="offset-1 mt-4">
        <Card className="tableMargin">
        <Table className="teacherTable" hover >
            <thead className="teacherHeadRow">
                <tr className="tableHead">
                    <th className="darkGrayText cameraIcon text-center"><i className="fa fa-camera-retro" aria-hidden="true"></i></th>
                    <th className="darkGrayText">Name</th>
                    <th className="darkGrayText">Grade</th>
                    <th className="darkGrayText">Price/Week</th>
                    <th className="darkGrayText">Pods</th>
                    <th className="darkGrayText">Message</th>
                </tr>
            </thead>
            <tbody className="teacherTable">
                {props.children}
            </tbody>
        </Table>
        </Card>
        </Col>
    )
}

export default TeacherTable