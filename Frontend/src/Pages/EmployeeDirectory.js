import React from "react";
import EmployeeCreate from "../components/EmployeeCreate";
import EmployeeTable from "../components/EmployeeTable";
import { gql, useQuery } from "@apollo/client";
import { GET_EMPLOYEES } from "../graphql/queries";

const EmployeeDirectory = () => {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);
  console.log(data);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      {!loading && (
        <EmployeeTable
          employees={data.employees}
          loading={loading}
          error={error}
        />
      )}
    </>
  );
};

export default EmployeeDirectory;
