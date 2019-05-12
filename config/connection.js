const MongoClient = require("mongodb").MongoClient;
const mongoConfig = {
    "serverUrl": "mongodb://localhost:27017/",
    // "serverUrl": "mongodb+srv://test:admin123@cluster0-t11vi.gcp.mongodb.net/test?retryWrites=true",
    "database": "Scheduler"
}

let _connection = undefined;
let _db = undefined;
// returns a connection cursor to mongo database
module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl, { useNewUrlParser: true });
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};
