const MongoClient = require('mongodb').MongoClient
const uri = process.env.MONGODB_URI || `mongodb://localhost:27017`
const dbName ='titan'
const collectionName = 'tickets'
let client = MongoClient.connect(uri, { useNewUrlParser: true })
let dbObject = client
  .then(clientObj => {
    console.log('Connection to DB successful')
    return clientObj.db(dbName).collection(collectionName)
  })
  .catch(err => new Error('Connection to DB failed: ', err))
