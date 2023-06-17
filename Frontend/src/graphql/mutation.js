import { gql } from "@apollo/client";

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($input: EmployeeInput!) {
    createEmployee(input: $input) {
      employees {
        Age
        CurrentStatus
        DateOfJoining
        Department
        LastName
        FirstName
        EmployeeType
        Title
        id
      }
      error
      message
      success
    }
  }
`;