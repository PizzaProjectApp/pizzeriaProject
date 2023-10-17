import { Schema, model } from "mongoose";
// import mongoosePaginate from "mongoose-paginate-v2";

// Define the Pizza schema
const PizzaSchema = new Schema({
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
    type: {
        type: String,
        enum: ["whole", "half"],
        default: "whole",
        required: false,
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

// PizzaSchema.plugin(mongoosePaginate);

// Create the pizza model using "model" directly
export const pizzaModel = model("pizzas", PizzaSchema);
