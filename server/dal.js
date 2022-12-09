const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, async function(
  err,
  client
) {
  console.log('Connected successfully to db server');

  // connect to myproject database
  db = await client.db('badBank');
});

// create user account using the collection.insertOne function
function create(name, email, password, balance) {
  // TODO: populate this function based off the video
  return new Promise((resolve, reject) => {
    const customers = db
      .collection('users')
      .insertOne({ name, email, password, balance })
      .then((doc) => resolve(doc))
      .catch((err) => reject(err));
  });
}

// find user account
function find(email) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection('users')
      .find({ email: email })
      .toArray(function(err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

// find user account
function findOne(email) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection('users')
      .findOne({ email: email })
      .then((doc) => resolve(doc))
      .catch((err) => reject(err));
  });
}

// update - deposit/withdraw amount
function update(email, amount) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection('users')
      .findOneAndUpdate(
        { email: email },
        { $set: { balance: amount } },
        { returnDocument: 'after' },
        function(err, documents) {
          err ? reject(err) : resolve(documents);
        }
      );
  });
}

// Create
function createField(email, key, value) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection('users')
      .updateOne(
        { email: email },
        { $set: { key: value } },
        { checkkeys: 'false' },
        function(err, documents) {
          err ? reject(err) : resolve(documents);
        }
      );
  });
}
// return all users by using the collection.find method
function all() {
  // TODO: populate this function based off the video
  return new Promise((resolve, reject) => {
    const customer = db
      .collection('users')
      .find({})
      .toArray(function(err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

//delete user
function deleteUser(email) {
  return new Promise((resolve, reject) => {
    const customer = db
      .collection('users')
      .findOneAndDelete({ email: email }, function(err, document) {
        err ? reject(err) : resolve(document);
      });
  });
}

module.exports = {
  create,
  findOne,
  find,
  update,
  all,
  deleteUser,
  createField,
};
