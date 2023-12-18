// db.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb://localhost:27017/Sushi_Fukusoke";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  socketTimeoutMS:30000,
});

async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("Sushi_Fukusoke").command({ ping: 1 });
    console.log("Conectado exitosamente a MongoDB!");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
  }
}

module.exports = { client, connectToDatabase };
