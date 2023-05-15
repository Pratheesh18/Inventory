const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jsonParserMiddleware = require('./middleware/bodyParser');
const itemsRouter = require('./routes/item');
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://pratheesh:lastofus@cluster0.r2kmgfe.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
   .then(() => console.log('Connected to Mongodb'))
   .catch((error) => console.error('Failed to connect to MongoDb', error));



app.use(jsonParserMiddleware);

app.use('/items',itemsRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});