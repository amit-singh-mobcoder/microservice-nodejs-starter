import mongoose from "mongoose";
import { Constants } from "../constants";

class MongooseConnector {
    _uri: string;

    constructor(uri:string){
        this._uri = uri;
    }

    async connect() {
        try {
            const connectionInstance = await mongoose.connect(this._uri);
            console.log('MongoDB connected successfully DB-HOST:',connectionInstance.connection.host);
        } catch (error) {
            console.log('MongoDB connection failed!! ', error);
            process.exit(1);
        }
    }
}

export default new MongooseConnector(Constants.MONGODB_URI!);