import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoError } from 'mongodb'
import { getMongoClient } from 'db'

export default (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise(async (resolve, reject) => {
    try {
      const client = await getMongoClient()

      client
      .db('portfolio')
      .collection('projects')
      .find({})
      .toArray((error: MongoError, projects: any[]) => {
        resolve(projects)
        res.json({ projects })
      })
    }
    catch(error){
      reject(error)
    }
  })
}