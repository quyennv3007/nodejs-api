import { MongoClient, ServerApiVersion } from 'mongodb'
import {env} from './environment.js'
// eslint-disable-next-line no-unused-vars
let trelloDatabaseInstance = null

// khởi tạo đối tượng  mongoClientinstance để connet đến mongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNET_DB = async () => {
  await mongoClientInstance.connect()
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}
export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Bạn chưa kết nối đến database')
  return trelloDatabaseInstance
}
