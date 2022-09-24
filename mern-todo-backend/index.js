import express from "express"
import Connection from "./db/db.js";
import cors from "cors"
import bodyParser from "body-parser"
import route from "./routes/routes.js";

const PORT = 8000;

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", route)
Connection()

app.listen(PORT, () => console.log(`Running on http://localhost${PORT}`))