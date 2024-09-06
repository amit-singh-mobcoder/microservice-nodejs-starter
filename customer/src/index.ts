import { app } from "./app";
import { Constants } from "./constants";
import mongooseConnector from "./database/mongoose.connection";

mongooseConnector.connect()
.then(() => {
    app.listen(Constants.APPLICATION_PORT, () => {
        console.log(`Customer Service is listening at PORT: ${Constants.APPLICATION_PORT}`)
    })
})
