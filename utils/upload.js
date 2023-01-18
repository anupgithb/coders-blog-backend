import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-yspoxsq-shard-00-00.gu2qycl.mongodb.net:27017,ac-yspoxsq-shard-00-01.gu2qycl.mongodb.net:27017,ac-yspoxsq-shard-00-02.gu2qycl.mongodb.net:27017/?ssl=true&replicaSet=atlas-e1avza-shard-0&authSource=admin&retryWrites=true&w=majority`;
const storage = new GridFsStorage({
    url: URL,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});
// console.log(multer({storage}));
export default multer({storage}); 