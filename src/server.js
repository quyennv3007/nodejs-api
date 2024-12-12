import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNET_DB, CLOSE_DB } from './config/mongodb.js'
import {env} from './config/environment.js'
import {APIs_v1} from './routes/v1/index.js'


const START_SERVER =() => {
  const app = express()

  app.use(express.json())

  app.use('/v1', APIs_v1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`${env.AUTHOR}, I am running at http://${env.APP_HOST}:${env.APP_PORT}/`)
  })

  exitHook(()=>{
    console.log('4.server is shutting down...')
    CLOSE_DB()
    console.log('5. Disconnected from MongoDB cloud atlas')
  })
}

(async () => {
  try{
    console.log('1.Connecting to mongoDB cloud atlas...')
    await CONNET_DB()
    console.log('2.Connecting to mongoDB cloud atlas...')
    START_SERVER()
  }catch(err){
    console.error(err)
    process.exit(0)
  }
})()