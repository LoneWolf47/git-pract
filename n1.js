const MongoClient = require('mongodb').MongoClient
const uri = process.env.MONGODB_URI || `mongodb://localhost:27017`
const dbName ='tan'
const collectionName = 'tick'
let client = MongoClient.connect(uri, { useNewUrlParser: true })
let dbObject = client
  .then(clientObj => {
    console.log('Connection to DB successful')
    return clientObj.db(dbName).collection(collectionName)
  })

nfnf