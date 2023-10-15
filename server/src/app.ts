import { envs } from "./config/index";
import { MongoDatabase } from "./data/mongodb/index";
import Server from "./presentation/server";
import { AppRoutes } from "./presentation/routes";

(() => {
    main();
})();

async function main() {
    try {
        await MongoDatabase.connect({
            mongoUrl: envs.MONGODB_URI,
            dbName: envs.DB_NAME,
        });
        new Server({ port: envs.PORT, routes: AppRoutes.routes }).start();
    } catch (error) {
        console.error(error);
    }
}
