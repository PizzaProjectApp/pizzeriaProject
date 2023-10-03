"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorFactory = void 0;
const errorFactory = function (options) {
    return class HandleError extends Error {
        constructor(message) {
            super(message);
            this.name = options.name;
            this.stack = "";
        }
    };
};
exports.errorFactory = errorFactory;
