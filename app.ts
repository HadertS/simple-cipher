import express, {Application} from "express"
const app: Application = express()

import { router as logMiddleware } from "./src/middleware/log"
import { router as caesarCipherRoutes } from "./src/routes/caesarCipher";
import { router as errorHandler} from "./src/middleware/errorHandler"

app.use(logMiddleware)
app.use(express.json())

app.use('/v1/caesar',caesarCipherRoutes)

app.use(errorHandler)

export default app;