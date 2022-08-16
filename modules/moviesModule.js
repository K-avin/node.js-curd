const express = require('express')
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const router = express.Router()
var db;

const uri = "mongodb+srv://root:<password>@cluster0.lx86um7.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(uri, (err, con) => {
    if (err) console.log(err);
    db = con.db('mflix')
})

var collection_name = "movies";

//GET - fetch all
router.get('/all', (req, res) => {
    db.collection(collection_name).find().toArray((err, movies) => {
        if (err) console.log(err);
        res.send(movies)
    })
})

//GET - fetch by _id
router.get('/:id', (req, res) => {
    db.collection(collection_name).findOne({ _id: mongo.ObjectId(req.params.id) }, (err, movies) => {
        if (err) console.log(err);
        res.send(movies)
    })
})

// POST - create
router.get('/create', (req, res) => {
    db.collection(collection_name).insert(req.body), (err, result) => {
        if (err) console.log(err);
        res.send('Comment posted.')
    }
})

// PUT - update by _id
router.get('/:id', (req, res) => {
    db.collection(collection_name).findOne({ _id: mongo.ObjectId(req.params.id) }, {
        $set: {
            // name: req.body.name,
        }
    }, (err, movies) => {
        console.log(err);
    })
})

// DELETE - delete by _id
router.delete('/:id', (req, res) => {
    db.collection(collection_name).findOne({ _id: mongo.ObjectId(req.params.id) }, (err, movies) => {
        if (err) console.log(err);
        res.send(movies)
    })
})

module.exports = router;
