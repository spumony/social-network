import React from "react";
import {Col, FormGroup, Input, Button, Row} from "reactstrap";

const NewPostForm = () => {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <h3>Add new post</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <FormGroup>
            <Input type="textarea" name="text" id="newPost" />
          </FormGroup>
          <div className="d-flex justify-content-end">
            <Button color="success" size="lg">Add post</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default NewPostForm