const { MongoClient } = require('mongodb');
// mongoclient ko import kiye and apne database ka url put kr diye
let mongourl = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(mongourl);

let dbconnection =  async ()=>{
    // client ko connect kiye 
    await client.connect();
    // apne new dp ka nam dedo jo banaa hai
    let db = client.db("mongobyvs");
    return db;
}
module.exports = {dbconnection}