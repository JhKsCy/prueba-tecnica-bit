const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL

const connectDatabase = async() => {
    try {
        await mongoose.connect(mongoUrl)
        console.log('Database connected')
    } catch(error) {
        console.log(error)
    }
}

module.exports = connectDatabase