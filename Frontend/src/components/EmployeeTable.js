import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "../style.css";
import { useNavigate } from "react-router-dom";
import EmployeeSearch from "./EmployeeSearch";
const EmployeeTable = ({ employees }) => {
  const nav = useNavigate();

  const getDate = (timestamp) => {
    const currentDate = new Date(parseInt(timestamp));
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col
            className="d-flex justify-content-center p-2 mt-5"
            style={{ backgroundColor: "#e8f0fe", borderRadius: "10px" }}
          >
            <h3>Employee Data</h3>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-start align-items-center mt-4">
            <EmployeeSearch />
          </Col>
          <Col className="d-flex justify-content-end align-items-center mt-5">
            <Button
              className="nav-btn "
              onClick={() => nav("/create-emplooyee")}
            >
              Add Employee
            </Button>
          </Col>
        </Row>
        <Table className="custom-table mt-5" bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Date of Joining</th>
              <th>Job Title</th>
              <th>Department</th>
              <th>Employee Type</th>
              <th>Current Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.employees.length > 0 ? (
              employees.employees?.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.FirstName}</td>
                  <td>{employee.LastName}</td>
                  <td>{employee.Age}</td>
                  <td>{getDate(employee.DateOfJoining)}</td>
                  <td>{employee.Title}</td>
                  <td>{employee.Department}</td>
                  <td>{employee.EmployeeType}</td>
                  <td>{employee.CurrentStatus ? 1 : 0}</td>
                </tr>
              ))
            ) : (
              <Row>
                <Col className="d-flex justify-content-center">
                  <h4>No data found</h4>
                </Col>
              </Row>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default EmployeeTable;
