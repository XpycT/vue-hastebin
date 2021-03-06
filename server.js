const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const shortid = require('shortid');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file');

// Create server
const app = express();
app.use(history());
app.use(serveStatic(path.join(__dirname, '/dist')));
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
        app.get('/:id.raw', (req, res) => {
            const post = db.get('pastes')
                .find({id: req.params.id})
                .value();
            res.send(`<pre>${post.data}</pre>`)
        });

        // POST /document
        app.post('/document', (req, res) => {
            db.get('pastes')
                .push(req.body)
                .last()
                .assign({id: shortid.generate(), type: 'doc'})
                .write()
                .then(post => res.send(post))
        });

        // GET /img/:id
        app.get('/img/:id', (req, res) => {
            const post = db.get('images')
                .find({id: req.params.id})
                .value();

            res.send(post)
        });
        // POST /img
        app.post('/img', (req, res) => {
            upload(req, res, function (err) {
                if (err) {
                    res.json({'status': 'error', 'message' : err })
                    return;
                }

                let fileInfo = {
                    'id': shortid.generate(),
                    'b64': req.file.buffer.toString('base64'),
                    'mimetype': req.file.mimetype
                };
                db.get('images')
                    .push(fileInfo)
                    .last()
                    .write()
                    .then(img => res.send(img));
            });
        });

        // Set db default values
        return db.defaults({pastes: [], images: []}).write()
    })
    .then(() => {
        app.listen(5000, () => console.log('listening on port 5000'))
    });