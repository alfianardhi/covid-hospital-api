import express, { Application, Request, Response } from 'express'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'

import AuthRouters from './routers/AuthRouters'
import HospitalRouters from './routers/HospitalRouters'

class App {
  public app: Application
  constructor() {
    this.app = express()
    this.libs()
    this.routes()
    dotenv.config()
  }

  private libs(): void {
    this.app.use(bodyparser.json())
    //this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use(compression())
    this.app.use(helmet())
    this.app.use(cors())
  }

  private routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('hello this is hospital api')
    })

    this.app.use('/api/v1/auth', AuthRouters)
    this.app.use('/api/v1/hospital', HospitalRouters)
    //
  }
}

const app = new App().app
const port: number = 3700
// TODO: logging(https://stackify.com/node-js-logging/), redis, test. dep
app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`)

  console.log(`This app run is ${process.env.DB_HOST}`)
})

export default app
