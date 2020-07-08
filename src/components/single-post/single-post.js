import React from "react";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row} from "reactstrap";

const SinglePost = () => {
  return (
    <div className="container-fluid">
      <h3>My posts</h3>
      <Row>
          <Col xs="3" className="mt-3">
            <CardImg top width="100%" src="https://reactstrap.github.io/assets/256x186.svg" alt="Card image cap" />
          </Col>
          <Col>
            <CardBody>
              <CardTitle tag="h3">New bike in Giant</CardTitle>
              <CardSubtitle tag="h5">Card subtitle</CardSubtitle>
              <CardText className="mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button color="primary">Like</Button>{' '}
              <Button color="secondary">Dislike</Button>{' '}
            </CardBody>
          </Col>
      </Row>
    </div>
  )
}

export default SinglePost