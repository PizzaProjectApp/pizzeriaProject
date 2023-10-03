import { Schema, model } from "mongoose";

// Define the Pizza schema
const BeverageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
        required: false,
    },
});

// Create the beverage model using "model" directly
export const beverageModel = model("beverages", BeverageSchema);
