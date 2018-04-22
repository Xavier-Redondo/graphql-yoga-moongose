class MongooseConnector {
  constructor(connection) {
    this.connection = connection;
  }

  closeConnection() {
    this.connection.close();
  }

  collection(collectionName) {
    return this.connection.collection(collectionName);
  }
}

module.exports = MongooseConnector;
