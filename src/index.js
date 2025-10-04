import dotenv from "dotenv";
import connectToDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env",
});

connectToDB()
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server is listening on Port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("Failed to connect to database ! ", error);
    });
