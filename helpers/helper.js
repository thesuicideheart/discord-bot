const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'bot';

const client = new MongoClient(url);

function Connect(){
    
    let db = null;

    client.connect(function(err){
        assert.equal(null, err);
        console.log("Connected to server");

        db = client.db(dbName);
        client.close();
    });

}

function insertStuff(callback)