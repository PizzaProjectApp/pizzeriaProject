import { PORT, connectDB } from "./config/index";
import Server from "./server";

(() => {
    main();
})();

async function main() {
    try {
        await connectDB();
        console.log("DB connected");
        await new Server({ port: Number(PORT) }).start();
    } catch (error) {
        console.error(error);
    }
}
