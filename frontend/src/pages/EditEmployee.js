import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const EditEmployee = () => {
  const { id } = useParams();

  const name = useRef("");
  const role = useRef("");
  const experience = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/employee/${id}`).then((res) => {
      let data = res.data;
      name.current.value = data.name;
      role.current.value = data.role;
      experience.current.value = data.experience;
    });
  });

  const updateEmployeeHandler = () => {
    let payload = {
      name: name.current.value,
      role: role.current.value,
      experience: Number(experience.current.value),
    };

    axios.put(`http://localhost:4000/employee/${id}`, payload).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Upadte employee details</legend>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" ref={role} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" ref={experience} />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={updateEmployeeHandler}
            >
              Update
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditEmployee;
