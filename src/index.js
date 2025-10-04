import dotenv from "dotenv";
import express from "express";
import connectToDB from "./db/index.js";

dotenv.config({
    path: "./env",
});

connectToDB();
const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});
