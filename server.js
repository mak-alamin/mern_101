const {MongoClient} = require('mongodb');

require('dotenv').config();

const url = process.env.MONGO_URL;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    db.collection('users').find().toArray(function (err, result) {
        if (err) throw err
    
        console.log(result);
    });
        
    db.close();
});