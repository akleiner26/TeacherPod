import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';

const Example = (props) => {
  return (
    <Col xs="12">
      <Card>
        <CardImg top width="100%" src={props.thumbnail} alt={props.name} />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.subject}</CardSubtitle>
          <CardText>Price: {props.price}</CardText>
          <CardText>Pod Size: {props.capacity}</CardText>
          <Button><i class="fa fa-comments" aria-hidden="true"></i></Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Example;