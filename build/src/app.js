"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const index_1 = require("./config/index");
(() => {
    main();
})();
async function main() {
    try {
        await (0, index_1.connectDB)();
        console.log("DB connected");
        await new server_1.default({ port: Number(index_1.PORT) }).start();
    }
    catch (error) {
        console.error(error);
    }
}
