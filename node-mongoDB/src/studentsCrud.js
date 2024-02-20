import { MongoClient } from 'mongodb';

export async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }
 async function createWeatherDocument(collection){
    const weatherDocument = {
        data: 'John Smith'
    };
 
    await collection.insertOne(weatherDocument);
 }

 export async function executeStudentCrudOperations() {
    const uri = process.env.DB_URI;
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('weatherApi');
         const collection = db.collection('data');
    } finally {
        await mongoClient.close();
    }
 }
