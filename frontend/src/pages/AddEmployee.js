import axios from "axios";
import { useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const name = useRef("");
  const role = useRef("");
  const experience = useRef("");

  const navigate = useNavigate();
  const addEmployeeHandler = () => {
    let payload = {
      name: name.current.value,
      role: role.current.value,
      experience: Number(experience.current.value),
    };

    axios.post("http://localhost:4000/employee", payload).then(() => {
      navigate("/");
    });
  };
  return (
    <>
    {/* Form for adding newly joined employee this form provide the field for name, role, experience to adding employee */}
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Add new employee details</legend>
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
              onClick={addEmployeeHandler}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddEmployee;
