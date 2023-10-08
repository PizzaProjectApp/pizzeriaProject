import { envs } from "./config/index";
import { MongoDatabase } from "./data/mongodb/index";
import Server from "./server";

(() => {
    main();
})();

async function main() {
    try {
        await MongoDatabase.connect({
            mongoUrl: envs.MONGODB_URI,
            dbName: envs.DB_NAME,
        });
        new Server({ port: envs.PORT }).start();
    } catch (error) {
        console.error(error);
    }
}
