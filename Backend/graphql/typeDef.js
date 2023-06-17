import { gql } from "apollo-server";

export const typeDefs = gql`
  type Employee {
    id: ID!
    FirstName: String!
    LastName: String!
    Age: Int!
    DateOfJoining: String!
    Title: String!
    Department: String!
    EmployeeType: String!
    CurrentStatus: Boolean!
  }

  type EmployeeResponse {
    success: Boolean!
    message: String!
    employees: [Employee]
    error: String
  }

  type EmployeeMutationResponse {
    success: Boolean!
    message: String!
    employees: Employee
    error: String
  }
  
  type Query {
    employees: EmployeeResponse
  }

  type Mutation {
    createEmployee(input: EmployeeInput!): EmployeeMutationResponse
    updateEmployee(id: ID!, input: EmployeeInput!): EmployeeMutationResponse
    deleteEmployee(id: ID!): EmployeeMutationResponse
  }

  input EmployeeInput {
    FirstName: String!
    LastName: String!
    Age: Int!
    DateOfJoining: String!
    Title: String!
    Department: String!
    EmployeeType: String!
  }
`;
