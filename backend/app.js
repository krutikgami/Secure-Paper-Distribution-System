import express from 'express';
import { UserSignup, UserLogin } from './controllers/User.controllers.js'; // Ensure this import path is correct

const app = express();

// Middleware to parse JSON bodies
app.use(express.json({ limit: '50mb', extended: true }));

// Debugging middleware to log request body
app.use((req, res, next) => {
    console.log('Request Method:', req.method);
    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);
    next();
});

// Define routes
app.post('/signup', UserSignup);
app.post('/login', UserLogin);


