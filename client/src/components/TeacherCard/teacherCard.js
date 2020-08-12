import React from 'react';
import "./teacherCard.css"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';

const Example = (props) => {
    return (
        <Col className="offset-1" xs="10">
            <Card className="cardText cardContainer">
                <Row>
                    <Col xs="2">
                        <CardImg className="cardThumb" top width="100%" src={props.thumbnail} alt={props.name} />
                    </Col>
                    {/* <CardBody> */}
                    <Col xs="2">
                        <CardTitle ><strong>{props.name}</strong></CardTitle>
                    </Col>
                    <Col xs="2">
                        <CardSubtitle >{props.subject}</CardSubtitle>
                    </Col>
                    <Col xs="2">
                        <CardText >Price: {props.price}</CardText>
                    </Col>
                    <Col xs="2">
                        <CardText >Pod Size: {props.capacity}</CardText>
                    </Col>
                    <Col xs="2">
                        <Button className="cardBtn"><i class="fa fa-comments" aria-hidden="true"></i></Button>
                    </Col>
                    {/* </CardBody> */}
                </Row>
            </Card>
        </Col>
    );
};

export default Example;