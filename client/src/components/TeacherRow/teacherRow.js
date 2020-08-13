import React from 'react';
import style from "./teacherRow.css"
import {
    Button
} from 'reactstrap';

const TeacherRow = (props) => {
    return (

        <tr className="vertAlign">
            <td className="vertAlign"><img src={props.thumbnail} alt={props.name}/></td>
            <td className="vertAlign"><a href="/profile">{props.name}</a></td>
            <td className="vertAlign">{props.subject}</td>
            <td className="vertAlign">{props.price}</td>
            <td className="vertAlign">{props.capacity}</td>
            <td className="vertAlign"><Button className="cardBtn cardInfo vertAlign"><i class="fa fa-comments" aria-hidden="true"></i></Button></td>
        </tr>
  
            // <Col className="offset-1" xs="10">
            //     {/* <Container className="teachCardContainer"> */}
            //     <Card className="cardText cardContainer">
            //         <Row>
            //             <Col xs="2">
            //                 <CardImg className="cardThumb cardInfo align-middle" top width="100%" src={props.thumbnail} alt={props.name} />
            //             </Col>
            //             {/* <CardBody> */}
            //             <Col xs="2">
            //                 <CardTitle className="cardInfo" ><strong>{props.name}</strong></CardTitle>
            //             </Col>
            //             <Col xs="2">
            //                 <CardSubtitle className="cardInfo">{props.subject}</CardSubtitle>
            //             </Col>
            //             <Col xs="2">
            //                 <CardText className="cardInfo">Price: {props.price}</CardText>
            //             </Col>
            //             <Col xs="2">
            //                 <CardText className="cardInfo">Pod Size: {props.capacity}</CardText>
            //             </Col>
            //             <Col xs="2">
            //                 <Button className="cardBtn cardInfo"><i class="fa fa-comments" aria-hidden="true"></i></Button>
            //             </Col>
            //             {/* </CardBody> */}
            //         </Row>
            //     </Card>
            // </Col>
     

    );
};

export default TeacherRow;