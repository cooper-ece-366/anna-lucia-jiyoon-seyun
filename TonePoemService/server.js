//Coded by: Jiyoon Pyo

const { response } = require('express');
const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
const router = require('./routes/index');

const app = express();
const PORT = 8080;
const MONGODB_URI = "mongodb+srv://tonepoem:BCmL8dVD4dwhOnyd@cluster0.fqkbn.mongodb.net/tonepoem?retryWrites=true&w=majority";

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router);

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    //useFindAndModify: false
});

mongoose.connection.once('open', function() {
    console.log('Connected to the Database');
});
mongoose.connection.on('error', function() {
    console.log('Connection Error');
});

// app.get('/', function(req, res) {
//     response.send('Hello World!')
// });

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
});