import { Messages } from "../helpers/helper.js";
import Employee from "../model/employeeSchema.js";

export const resolvers = {
  Query: {
    employees: async () => {
      try {
        const employees = await Employee.find({});
        return {
          success: true,
          message: Messages.GET_EMPLOYEES,
          employees,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          message: Messages.GET_EMPLOYEES_ERROR,
          error: error.message,
        };
      }
    },
  },

  Mutation: {
    createEmployee: async (_, { input }) => {
      try {
        const {
          Age,
          DateOfJoining,
          CurrentStatus,
          Department,
          EmployeeType,
          FirstName,
          LastName,
          Title,
        } = input;
        const employees = await Employee.create({
          Age,
          DateOfJoining,
          Department,
          EmployeeType,
          FirstName,
          LastName,
          Title,
          CurrentStatus: CurrentStatus ?? true,
        });
        return {
          success: true,
          message: Messages.CREATE_EMPLOYEE,
          employees: employees,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          message: Messages.CREATE_EMPLOYEE_ERROR,
          error: error.message,
        };
      }
    },
    updateEmployee: async (_, { id, input }) => {
      try {
        console.log(id, input);
        const updatedEmployee = await Employee.findByIdAndUpdate(id, input, {
          new: true,
        });

        if (!updatedEmployee) {
          return {
            success: false,
            message: Messages.NO_EMPLYEE_FOUND,
            updatedEmployee,
            error: null,
          };
        }

        return {
          success: true,
          message: Messages.UPDATE_EMPLOYEE,
          employees: updatedEmployee,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          message: Messages.UPDATE_EMPLOYEE_ERROR,
          error: error.message,
        };
      }
    },
    deleteEmployee: async (_, { id }) => {
      try {
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) throw new Error();
        return {
          success: true,
          message: Messages.DELETE_EMPLOYEE,
          employees: deletedEmployee,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          message: Messages.DELETE_EMPLOYEE_ERROR,
          error: error.message,
        };
      }
    },
  },
};
