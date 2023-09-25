import express, { Request, Response, NextFunction} from "express"
const router = express.Router()

router.use((req:Request, res:Response, next:NextFunction) => {
    console.log('Time: ', Date.now())
    next()
  })

  export { router };