"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empanadaModel = void 0;
const mongoose_1 = require("mongoose");
const EmpanadaSchema = new mongoose_1.Schema({
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
exports.empanadaModel = (0, mongoose_1.model)("empanadas", EmpanadaSchema);
