import { MongoClient, MongoError } from 'mongodb'

export const getMongoClient = (): Promise<MongoClient> => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(process.env.MONGO_URL, (error: MongoError, client: MongoClient) => {
      if(error) {
        reject(error)
      }
      else {
        resolve(client)
      }
    })
  })
}

