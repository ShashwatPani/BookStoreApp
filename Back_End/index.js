import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import jobRoute from "./route/job.route.js";
import userRoute from "./route/user.route.js";
import applyRoute from "./route/apply.route.js"; // Import applyRoute

import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("Error:", error);
});

// Define routes
app.use("/book", bookRoute);
app.use("/job", jobRoute);
app.use("/user", userRoute);
app.use("/apply", applyRoute); // Use applyRoute

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
