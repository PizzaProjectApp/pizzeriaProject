import { Schema, model } from "mongoose";

// Define the Empanada schema
const EmpanadaSchema = new Schema({
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
    thumbnail: {
        type: [String],
        default: [""],
        required: false,
    },
    status: {
        type: Boolean,
        default: true,
        required: false,
    },
});

// Create the empanada model using "model" directly
export const empanadaModel = model("empanadas", EmpanadaSchema);
