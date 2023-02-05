import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// products data
import products from "./data.js";

//env config
dotenv.config();

// init express
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Port
const PORT = process.env.PORT || 5000;

// Routes
app.get("/api", (req, res) => {
  res.send("Api Works");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
