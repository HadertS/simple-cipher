import express, { Request, Response, NextFunction} from "express"
const router = express.Router()

router.use(function (err:Error, req:Request, res:Response, next:NextFunction) {
    console.error(err.stack)
    res.status(500).send('Something went wrong with your request')
  })

  export { router };