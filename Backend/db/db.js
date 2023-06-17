import mongoose from 'mongoose'

const url =
  "mongodb://0.0.0.0:27017/EMS";

const connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};

connect();