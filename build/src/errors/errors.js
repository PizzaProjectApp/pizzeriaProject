"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPizzasPaginatedError = exports.DuplicatedProductError = exports.InvalidArgValuesError = exports.ConnectToMongoDBError = void 0;
const errorHandler_1 = require("./errorHandler");
exports.ConnectToMongoDBError = (0, errorHandler_1.errorFactory)({
    name: "ConnectToMongoDBError",
});
exports.InvalidArgValuesError = (0, errorHandler_1.errorFactory)({
    name: "InvalidArgValuesError",
});
exports.DuplicatedProductError = (0, errorHandler_1.errorFactory)({
    name: "DuplicatedProductError",
});
exports.GetPizzasPaginatedError = (0, errorHandler_1.errorFactory)({
    name: "GetPizzasPaginatedError",
});
