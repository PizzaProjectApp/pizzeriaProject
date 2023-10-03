"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beverageModel = void 0;
const mongoose_1 = require("mongoose");
const BeverageSchema = new mongoose_1.Schema({
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
exports.beverageModel = (0, mongoose_1.model)("beverages", BeverageSchema);
