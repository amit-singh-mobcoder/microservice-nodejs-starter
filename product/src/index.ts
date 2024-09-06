import { Constants } from "./constants";
import { app } from "./app";
import mongooseConnector from "./database/mongoose.connection";

mongooseConnector.connect()
.then(() => {
    app.listen(Constants.APPLICATION_PORT, () => {
        console.log(`Product service is listening at PORT: ${Constants.APPLICATION_PORT}`);
    })
})
