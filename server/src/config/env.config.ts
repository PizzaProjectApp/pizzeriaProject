import { config } from "dotenv";

config();

// Set the server's port: use the value of PORT environment variable if defined, else default to 8080
export const PORT = process.env.PORT || 3100;

// Set the MongoDB URI: use the value of MONGODB_URI environment variable

export const MONGODB_URI: string = process.env.MONGODB_URI || "";
