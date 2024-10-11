import express from 'express';
import connect_db from './db_connector.js';
import userroutes from './routes/User.routes.js';
import adminroutes from './routes/Admin.routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({
    path: '../.env'
});

const app = express();

// Middleware to enable CORS
app.use(cors({
origin: process.env.CORS_ORIGIN,
credentials: true
}))

// Middleware to parse JSON bodies
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended: true,limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());  

// Debugging middleware to log request body
app.use((req, res, next) => {
    console.log('Request Method:', req.method);
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);
    next();
});

connect_db()
    .then(() => {
        app.listen(3000, () => console.log('Server is running on port 3000'));
    })
    .catch((err) => console.log('Mongodb connection error', err));

app.use('/api/v1/users', userroutes);
app.use('/api/v1/admin',adminroutes);