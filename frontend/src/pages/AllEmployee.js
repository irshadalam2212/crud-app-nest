import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DeleteEmployee from "../components/DeleteEmployee";

const AllEmployee = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:4000/employee").then((res) => {
      setAllEmployees(res.data);
    });
  }, []);

  const openDeletedModalHandler = (id) => {
    setItemIdToDelete(id);
    setShowModal(true);
  };

  const closeDeleteModalHandeler = () => {
    setItemIdToDelete(0);
    setShowModal(false);
  };

  const confirmDeleteHandler = () => {
    axios
      .delete(`http://localhost:4000/employee/${itemIdToDelete}`)
      .then((res) => {
        setAllEmployees((existingData) => {
          return existingData.filter((_) => _._id !== itemIdToDelete);
        });
        setItemIdToDelete(0);
        setShowModal(false);
      });
  };

  return (
    <>
      <DeleteEmployee
        title="Delete confirmation"
        body="Are you sure to delete this data"
        showModal={showModal}
        closeDeleteModalHandeler={closeDeleteModalHandeler}
        confirmDeleteHandler={confirmDeleteHandler}
      ></DeleteEmployee>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-4 offset-md-4">
            <Button
            className="mb-2 text-center"
              variant="primary"
              type="button"
              onClick={() => {
                navigate("/add-employee");
              }}
            >
              Add new Employee
            </Button>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Experience</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allEmployees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.experience}</td>
                <td>
                  <Button
                  className="m-1"
                    type="button"
                    variant="primary"
                    onClick={() => {
                      navigate(`/edit-employee/${emp._id}`);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => {
                      openDeletedModalHandler(emp._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default AllEmployee;
