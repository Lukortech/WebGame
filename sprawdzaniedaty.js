const { ObjectId } = require('mongodb');

const objectId = new ObjectId("664e67ca227a8189b53f8f9e");
const timestamp = objectId.getTimestamp();

console.log('Timestamp:', timestamp);