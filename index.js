const express = require('express')
const bodyParser = require('body-parser')
const moviesRouter = require('./modules/moviesModule')
const commentsRouter = require('./modules/commentsModule')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/movies', moviesRouter)
app.use('/api/comments', commentsRouter)

app.get('/', (req, res) => res.send('Hello World'))


app.listen(port, () => console.log('Server is Runing'))