// route will be /api/new-meetup

import { MongoClient } from 'mongodb';

// Here we define handler which will handle the request and response come form the website. like incoming POST request from a form, GET request for Data, etc.
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const MONGODB_URI = process.env.MONGODB_URI;
    // once we get the data, we can save it in the Database do whatever we want to do.
    try {
      const client = await MongoClient.connect(`${MONGODB_URI}`);
      const db = client.db();

      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data);
      client.close();

      res.status(200).json({ message: 'Meetups inserted successfully' });
    } catch (error) {
      console.log(error);
    }
  }
}

export default handler;
