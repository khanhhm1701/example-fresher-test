import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const ModalAddNew = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = () => {
    console.log(`>>> job: ${job} , name: ${name}`);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Job">
            <Form.Control
              type="text"
              placeholder="Job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleSubmit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalAddNew;
