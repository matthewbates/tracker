const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;
const MONGO_URL =
  "mongodb+srv://matthewBates:D2vtvzx5kTDO3BY2@tracker.msmqka9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

const startServer = async () => {
  await mongoose.connect(MONGO_URL);
};

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

startServer();
