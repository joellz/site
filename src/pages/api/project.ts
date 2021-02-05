import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoError } from 'mongodb'
import { getMongoClient } from 'db'

export default (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise(async (resolve, reject) => {
    try {

      const client = await getMongoClient()
      const slug = req.query.slug

      client
      .db('portfolio')
      .collection('projects')
      .find({ slug })
      .toArray((error: MongoError, project: any) => {
        resolve(project)
        res.json({ project })
      })
    }
    catch(error){
      reject(error)
    }
  })
}