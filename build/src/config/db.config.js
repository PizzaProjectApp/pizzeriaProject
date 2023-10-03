"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const index_1 = require("./index");
const mongoose_1 = require("mongoose");
const errors_1 = require("../errors/errors");
const connectDB = async () => {
    try {
        await (0, mongoose_1.connect)(index_1.MONGODB_URI);
        console.log("🔌", "DB connected");
    }
    catch (error) {
        throw new errors_1.ConnectToMongoDBError("Failed to connect to MongoDB");
    }
};
exports.connectDB = connectDB;
