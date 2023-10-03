import { Schema, model } from "mongoose";

// Define the Dessert schema
const DessertSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ["cold", "hot"],
        default: "cold",
    },
    status: {
        type: Boolean,
        default: true,
        required: false,
    },
});

// Create the dessert model using "model" directly
export const dessertModel = model("desserts", DessertSchema);
