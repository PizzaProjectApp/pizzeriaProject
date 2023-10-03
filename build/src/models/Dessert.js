"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dessertModel = void 0;
const mongoose_1 = require("mongoose");
const DessertSchema = new mongoose_1.Schema({
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
exports.dessertModel = (0, mongoose_1.model)("desserts", DessertSchema);
