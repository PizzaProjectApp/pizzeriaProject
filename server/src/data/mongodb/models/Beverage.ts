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
    thumbnail: {
        type: [String],
        default: [""],
    },
    status: {
        type: Boolean,
        default: true,
        required: false,
    },
});

// Create the beverage model using "model" directly
export const beverageModel = model("beverages", BeverageSchema);
