import { Button, Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(false)

  const handleClose = () => {
    setIsShow(false)
  }
  return (
    <div>
      <Header />
      <Container>
        <div className="add-user">
          <span className="list-user-tag">List Users</span>
          <Button variant="success" onClick={() => setIsShow(true)}>Add new user</Button>
        </div>
        <TableUsers />
      </Container>
      <ModalAddNew show={isShow} handleClose={handleClose} />
    </div>
  );
}

export default App;
