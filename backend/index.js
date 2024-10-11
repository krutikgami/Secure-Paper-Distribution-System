import express from 'express';
import connect_db from './db_connector.js';
import userroutes from './routes/User.routes.js';
import adminroutes from './routes/Admin.routes.js';
import dotenv from 'dotenv';

dotenv.config({
    path: '../.env'
});

const app = express();

// Middleware to parse JSON bodies
app.use(express.json({ limit: '50mb' }));

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