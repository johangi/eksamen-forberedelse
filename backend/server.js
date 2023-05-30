require('dotenv').config(); // Config to use .env file

// app dependencies
const express = require('express'); // For routing
const cors = require('cors'); // For cross origin request handling
const mongoose = require('mongoose'); // Communicate with DB
const userRoutes = require('./routes/user'); // Routes for login & signup
const todoRoutes = require('./routes/todo'); // Routes for todolist

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Log every request recieved
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/todo', todoRoutes);

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests on port
        app.listen(process.env.PORT, () => {
            console.log('listening on port ' + process.env.PORT);
        });
    })
    .catch(error => console.log(error));