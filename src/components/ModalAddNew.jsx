import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { postCreateUser } from "../services/userService";
import { toast } from "react-toastify";

const ModalAddNew = ({ show, handleClose, handleUpdateTable }) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleCreateUser = async() => {
    let res = await postCreateUser(name, job)
    console.log(">>>check res", res)
    if(res.data && res.data.id){
      handleClose();
      setName("");
      setJob("");
      toast.success("A user is created succeed!!!")
      handleUpdateTable({id: res.data.id, first_name: name})
    }else {
      toast.error("An error occurred while creating")
    }
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
              handleCreateUser();
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
