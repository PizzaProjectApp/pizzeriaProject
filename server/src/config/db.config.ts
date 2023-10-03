// Import the MongoDB URI from the .env file in config.js
import { MONGODB_URI } from "./index";
import { connect } from "mongoose";
import { ConnectToMongoDBError } from "../errors/errors";

export const connectDB = async () => {
    try {
        await connect(MONGODB_URI);
        console.log("🔌", "DB connected");
    } catch (error) {
        throw new ConnectToMongoDBError("Failed to connect to MongoDB");
    }
};
