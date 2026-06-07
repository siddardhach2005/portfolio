import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import projectRoutes from "./routes/projects.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/portfolio")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/projects", projectRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});