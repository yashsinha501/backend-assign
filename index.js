const express = require('express')
const bodyparser = require('body-parser')
const routes = require('./src/routes/productRoutes')
const mongodb = require('./db')
require("dotenv").config();


const app = express()
app.use(express.json());


async function startServer() {
    try {

        mongodb;
        
        app.use('/api', routes);

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

startServer();