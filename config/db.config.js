const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost/express-cities-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(x => 
    console.log(`Connected to Mongo! database name: "${x.connections[0].name}"`)
    )
    .catch(err => console.log('Error connecting to MongoDB', err));