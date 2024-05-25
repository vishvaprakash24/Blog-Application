import express from 'express';
import dotenv from 'dotenv';
import Router from './routes/route.js';

// dotenv initialization
dotenv.config();

import connection from './database/db.js'

const app = express();

app.use('/', Router)

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


connection(USERNAME, PASSWORD);
