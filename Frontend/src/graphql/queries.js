import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
  query {
    employees {
      employees {
        Age
        CurrentStatus
        DateOfJoining
        Department
        EmployeeType
        FirstName
        LastName
        Title
        id
      }
      error
      message
      success
    }
  }
`;