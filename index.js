// import express from "express";
// import bodyParser from "body-parser";

// import usersRoutes from "./routes/users.js";

// const app = express();
// const PORT = 5000;

// app.use(bodyParser.json());

// app.use("/users", usersRoutes);
// app.get("/", (req, res) => res.send("Welcome to the Users API!"));
// // app.all("*", (req, res) =>
// //   res.send("You've tried reaching a route that doesn't exist.")
// // );

// app.listen(PORT, () =>
//   console.log(`Server running on port: http://localhost:${PORT}`)
// );
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import usersRoutes from "./routes/users.js";

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use("/users", usersRoutes);

// Root Route
app.get("/", (req, res) => res.send("Welcome to the Users API!"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((error) => console.error("❌ Failed to connect to MongoDB:", error));

// Start Server
app.listen(PORT, () =>
  console.log(`🚀 Server running on port: http://localhost:${PORT}`)
);
