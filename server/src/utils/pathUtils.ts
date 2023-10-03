import { dirname, join } from "path";

// Get the current file's path
const currentFilePath = __filename;

// Get the current directory (src/utils)
const currentDir = dirname(currentFilePath);

// Go up one level to reach the src folder
const rootDir = join(currentDir, "..");

export const __dirname = rootDir;
