import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Get the current file's path
const __filename = fileURLToPath(import.meta.url);

// Get the current directory (src/utils)
const currentDir = dirname(__filename);

// Go up one level to reach the src folder
const rootDir = join(currentDir, "..");

// Go up two levels over src folder
export const rootDirOverSrc = join(currentDir, "../../");

export const __dirname = rootDir;
