import Employee from "../model/employeeSchema.js";

export const resolvers = {
  Query: {
    employees: async () => {
      try {
        const employees = await Employee.find({});
        return {
          success: true,
          message: "Employees fetched successfully",
          employees,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          message: "Failed to fetch employees",
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
          message: "Employees created successfully",
          employees:employees,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          message: "Failed to create employees",
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
            message: "NO employee found",
            updatedEmployee,
            error: null,
          };
        };

        return {
          success: true,
          message: "Employees updated successfully",
          employees:updatedEmployee,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          message: "Failed to update employees",
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
          message: "Employees Deleted successfully",
          employees:deletedEmployee,
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          message: "Failed to delete employees",
          error: error.message,
        };
      }
    },
  },
};
