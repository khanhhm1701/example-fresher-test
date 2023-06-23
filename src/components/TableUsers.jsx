import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { fetchAllUsers } from "../services/userService";
import ReactPaginate from "react-paginate";
import ModalAddNew from "./ModalAddNew";

const TableUsers = () => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isShow, setIsShow] = useState(false);
  const handleClose = () => {
    setIsShow(false);
  };

  const handleUpdateTable = (user) => {
    setListUsers([user, ...listUsers])
  }

  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (page) => {
    let res = await fetchAllUsers(page);
    if (res && res.data && res.data.data) {
      setListUsers(res.data.data);
      setTotalUsers(res.data.total);
      setTotalPages(res.data.total_pages);
    }
  };

  const handlePageClick = (event) => {
    getUsers(event.selected + 1);
  };

  return (
    <>
      <div>
        <div className="add-user">
          <span className="list-user-tag">List Users</span>
          <Button variant="success" onClick={() => setIsShow(true)}>
            Add new user
          </Button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
      <ModalAddNew show={isShow} handleClose={handleClose} handleUpdateTable = {handleUpdateTable} />
    </>
  );
};

export default TableUsers;
