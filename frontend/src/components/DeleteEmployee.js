import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteEmployee = (props) => {
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={() => {
          props.closeDeleteModalHandeler();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              props.closeDeleteModalHandeler();
            }}
          >
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              props.confirmDeleteHandler();
            }}
          >
            Confirm delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteEmployee;
