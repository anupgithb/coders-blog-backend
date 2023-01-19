import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors({
    origin:["http://localhost:3000","https://coder-blog-mern.onrender.com"]
}));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

// if(process.env.NODE_ENV === 'production')
// {
//     app.use(express.static("client/build"));
// }

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL=process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-yspoxsq-shard-00-00.gu2qycl.mongodb.net:27017,ac-yspoxsq-shard-00-01.gu2qycl.mongodb.net:27017,ac-yspoxsq-shard-00-02.gu2qycl.mongodb.net:27017/?ssl=true&replicaSet=atlas-e1avza-shard-0&authSource=admin&retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));