import React from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../style.css";
import { Col, Container, Row, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CREATE_EMPLOYEE } from "../graphql/mutation";
import { GET_EMPLOYEES } from "../graphql/queries";
import { client } from "../App";
import { schema } from "../helper";
import { toast } from "react-toastify";

const EmployeeCreate = () => {
  const intialValue = {
    FirstName: "",
    LastName: "",
    Age: "",
    DateOfJoining: "",
    Title: "",
    Department: "",
    EmployeeType: "",
  };
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValue,
  });

  const [createEmployee] = useMutation(CREATE_EMPLOYEE);

  const onSubmit = (data) => {
    createEmployee({ variables: { input: data } })
      .then(() => {
        const employeesData = client.readQuery({ query: GET_EMPLOYEES });
        const newEmployee = {
          data,
        };
        client.writeQuery({
          query: GET_EMPLOYEES,
          data: {
            employees: {
              ...employeesData.employees,
              employees: [...employeesData.employees.employees, newEmployee],
            },
          },
        });
        reset(intialValue);
        toast.success("Employee created Successfully", {
          theme: "dark",
        });
      })
      .then()
      .catch(() => {
        toast.error("Something Went Wrong!", {
          theme: "dark",
        });
      });
  };

  return (
    <>
      <Container className="mt-4 d-flex  flex-column">
        <Row>
          <Col className="mt-4 d-flex justify-content-around">
            <h3 className="">Add Employee</h3>
            <button className="cancel-btn" onClick={() => nav("/")}>
              Back
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "58%" }} className="mt-5">
              <Card.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>{" "}
                        <Form.Control
                          type="text"
                          className="fcontrol"
                          {...register("FirstName")}
                        />
                      </Form.Group>
                      {errors.FirstName && (
                        <p className="error-class">
                          {errors.FirstName.message}
                        </p>
                      )}
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>{" "}
                        <Form.Control
                          className="fcontrol"
                          type="text"
                          {...register("LastName")}
                        />
                      </Form.Group>
                      {errors.LastName && (
                        <p className="error-class">{errors.LastName.message}</p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>{" "}
                        <Form.Control
                          type="number"
                          className="fcontrol"
                          {...register("Age")}
                        />
                      </Form.Group>
                      {errors.Age && (
                        <p className="error-class">{errors.Age.message}</p>
                      )}
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        {" "}
                        <Form.Label>Date of Joining</Form.Label>{" "}
                        <Form.Control
                          type="date"
                          className="fcontrol"
                          {...register("DateOfJoining")}
                        />
                      </Form.Group>
                      {errors.DateOfJoining && (
                        <p className="error-class">
                          {" "}
                          {errors.DateOfJoining.message}
                        </p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {" "}
                      <Form.Group className="mb-3">
                        {" "}
                        <Form.Label>Title</Form.Label>{" "}
                        <Form.Select
                          className="fcontrol"
                          type="text"
                          {...register("Title")}
                        >
                          <option selected>Employee</option>
                          <option>Manager</option>
                          <option>Director</option>
                          <option>VP</option>
                        </Form.Select>
                      </Form.Group>
                      {errors.Title && (
                        <p className="error-class">{errors.Title.message}</p>
                      )}
                    </Col>

                    <Col>
                      <Form.Group className="mb-3">
                        {" "}
                        <Form.Label>Department</Form.Label>
                        <Form.Select
                          className="fcontrol"
                          type="text"
                          {...register("Department")}
                        >
                          <option selected>IT</option>
                          <option>Marketing</option>
                          <option>HR</option>
                          <option>Engineering</option>
                        </Form.Select>
                      </Form.Group>
                      {errors.Department && (
                        <p className="error-class">
                          {errors.Department.message}
                        </p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>EmployeeType</Form.Label>
                        <Form.Select
                          className="fcontrol"
                          type="text"
                          {...register("EmployeeType")}
                        >
                          <option selected>FullTime</option>
                          <option>PartTime</option>
                          <option>Contract</option>
                          <option>Seasonal</option>
                        </Form.Select>
                      </Form.Group>
                      {errors.EmployeeType && (
                        <p className="error-class">
                          {errors.EmployeeType.message}
                        </p>
                      )}
                    </Col>
                  </Row>
                  <button type="submit" className="nav-btn mt-1 mb-1">
                    Submit
                  </button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EmployeeCreate;
