import MongoClient from 'mongodb';
import { last } from 'lodash';

const prepare = o => ({ ...o, _id: o._id.toString() });

const db = async () => {
  const dbName = last(process.env.MONGODB_URI.split('/'));
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const myDb = client.db(dbName);

  return myDb;
};

export default class Mongo {
  async setup() {
    this.db = await db();
  }

  async find(collection, query, options = {}) {
    let q = this.db.collection(collection).find(query);
    q = options.limit ? q.limit(options.limit) : q;
    return (await q.toArray()).map(prepare);
  }

  async findOne(collection, query) {
    return this.db.collection(collection).findOne(query);
  }

  async updateOne(collection, ...args) {
    const c = this.db.collection(collection);
    return c.updateOne(...args);
  }

  async insertOne(collection, ...args) {
    const c = this.db.collection(collection);
    return c.insertOne(...args);
  }
}
