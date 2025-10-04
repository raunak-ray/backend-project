import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDB = async () => {
    try {
        const databaseInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log("\nDatabase connected");
    } catch (error) {
        console.log("Error connecting to db: ", error);
    }
};

export default connectToDB;
