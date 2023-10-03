"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__dirname = void 0;
const path_1 = require("path");
const currentFilePath = __filename;
const currentDir = (0, path_1.dirname)(currentFilePath);
const rootDir = (0, path_1.join)(currentDir, "..");
exports.__dirname = rootDir;
