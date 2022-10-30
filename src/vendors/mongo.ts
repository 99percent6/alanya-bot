import { MongoClient } from 'mongodb'
import config from 'config'

const uri = config.get<string>('mongodb.uri')

const mongodbClient = new MongoClient(uri)
const database = mongodbClient.db(config.get<string>('mongodb.database'))
const User = database.collection(config.get<string>('mongodb.collection.user'))

export {
  mongodbClient,
  database,
  User,
}
