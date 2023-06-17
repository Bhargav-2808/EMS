import * as yup from "yup";
export const schema = yup.object().shape({
  FirstName: yup.string().required("First Name is required"),
  LastName: yup.string().required("Last Name is required"),
  Age: yup
    .number()
    .typeError("Age must be a number")
    .integer("Age must be an integer")
    .min(20, "Age must be at least 20")
    .max(70, "Age cannot exceed 70")
    .required("Age is required"),
  DateOfJoining: yup
    .date()
    .typeError("Date of Joining must be a valid date")
    .required("Date of Joining is required"),
  Title: yup
    .string()
    .oneOf(["Employee", "Manager", "Director", "VP"], "Invalid Title")
    .required("Title is required"),
  Department: yup
    .string()
    .oneOf(["IT", "Marketing", "HR", "Engineering"], "Invalid Department")
    .required("Department is required"),
  EmployeeType: yup
    .string()
    .oneOf(
      ["FullTime", "PartTime", "Contract", "Seasonal"],
      "Invalid Employee Type"
    )
    .required("Employee Type is required"),
});
