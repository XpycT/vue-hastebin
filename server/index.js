const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

// Create server
const app = express();
app.use(bodyParser.json());

// Create database instance and start server
const adapter = new FileAsync('db.json');
low(adapter)
    .then(db => {
        // Routes
        // GET /:id
        app.get('/document/:id', (req, res) => {
            const post = db.get('pastes')
                .find({id: req.params.id})
                .value();

            res.send(post)
        });

        // POST /document
        app.post('/document', (req, res) => {
            db.get('pastes')
                .push(req.body)
                .last()
                .assign({id: shortid.generate()})
                .write()
                .then(post => res.send(post))
        });

        // Set db default values
        return db.defaults({pastes: []}).write()
    })
    .then(() => {
        app.listen(3003, () => console.log('listening on port 3003'))
    });