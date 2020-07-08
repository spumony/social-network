import React from "react";
import {Row, Col, Card, Button, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, CardBody} from 'reactstrap';
import './container.scss'

const Container = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col className="cover-img"></Col>
      </Row>
      <Row className="mt-3">
        <Col xs="3">
          <CardImg top width="100%" src="https://reactstrap.github.io/assets/256x186.svg" alt="Card image cap" />
        </Col>
        <Col xs="auto">
          <CardBody>
            <CardTitle tag="h3">Ciumac Alexandr</CardTitle>
            <CardSubtitle tag="h5">front-end developer</CardSubtitle>
            <ul>
              <li>Date of birth: 6 march</li>
              <li>City: Chisinau</li>
              <li>Education: UTM</li>
            </ul>
          </CardBody>
        </Col>
      </Row>
    </div>
  )
}

export default Container