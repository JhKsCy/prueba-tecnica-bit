const express = require('express')
const app = express()
const cors = require('cors')
const api = require('./routes/api.routes')

const dotenv = require('dotenv')
dotenv.config();
const port = process.env.PORT

const databaseConnect = require('./db/config')
databaseConnect()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/', api)


app.listen(port, () => {
    console.log(`Server connected on ${port} port`)
})
