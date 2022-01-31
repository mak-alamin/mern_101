const {MongoClient} = require('mongodb');

const url = "mongodb+srv://mak_alamin:mongopass@cluster0.kdfnv.mongodb.net/test_db?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    db.collection('users').find().toArray(function (err, result) {
        if (err) throw err
    
        console.log(result);
    });
        
    db.close();
});