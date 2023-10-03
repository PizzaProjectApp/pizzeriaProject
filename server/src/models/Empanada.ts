import { Schema, model } from "mongoose";

// Define the Empanada schema
const EmpanadaSchema = new Schema({
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
    status: {
        type: Boolean,
        default: true,
        required: false,
    },
});

// Create the empanada model using "model" directly
export const empanadaModel = model("empanadas", EmpanadaSchema);
