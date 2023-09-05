import express, {Application} from "express"
const app: Application = express()

import { router as logMiddleware } from "./src/middleware/log"
import { router as caesarCipherRoutes } from "./src/routes/caesarCipher";

app.use(logMiddleware)

app.use('/caesar',caesarCipherRoutes)

export default app;