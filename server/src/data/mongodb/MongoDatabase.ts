import { connect } from "mongoose";
import { ConnectToMongoDBError } from "../../errors/errors";

interface Options {
    mongoUrl: string;
    dbName: string;
}

export class MongoDatabase {
    static async connect(options: Options) {
        const { mongoUrl, dbName } = options;
        try {
            await connect(mongoUrl, { dbName: dbName });
            console.log("🔌", "DB connected");
            return true;
        } catch (error) {
            throw new ConnectToMongoDBError("Failed to connect to MongoDB");
        }
    }
}
