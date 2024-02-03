//Importing project dependancies that we installed earlier
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' 
import helmet from 'helmet'
import bodyParser from 'body-parser';
import db from './config/db';
//Importing .env validation 
import validateEnv from '@utils/validateEnv'
import userRoutes from './routes/UserRoutes';




//App Varaibles 
dotenv.config()

validateEnv();

//intializing the express app 
const app = express(); 

// make sure to connect to the database
db;

//using the dependancies
app.use(helmet()); 
app.use(cors()); 
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/api/users', userRoutes);


//exporting app
module.exports = app