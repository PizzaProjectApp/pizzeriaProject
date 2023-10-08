import "dotenv/config";
import { get } from "env-var";

export const envs = {
    PORT: get("PORT").required().asPortNumber(),
    MONGODB_URI: get("MONGODB_URI").required().asString(),
};
