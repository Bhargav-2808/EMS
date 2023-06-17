import  mongoose  from "mongoose";


const employeeSchema = new mongoose.Schema({
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Age:{
    type: Number,
  },
  DateOfJoining:{
    type:Date,
  },
  Title:{
    type:String,
  },
  EmployeeType:{
    type:String,
  },
  Department:{
    type:String,
  },
  CurrentStatus:{
    type:Boolean,
  },
});

export default mongoose.model("employee", employeeSchema);