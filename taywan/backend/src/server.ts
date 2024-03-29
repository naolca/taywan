//Importing Libraries 
// change the above line to import 
import dotenv from 'dotenv';
// import app from './index.ts';
import app from './index';


/*
  ===============================================================
 Importing the port set on the .env, if the port number is not set on .env or the port is being used by another server
running on the local macchine we are asking the app to use 3000 as the port number 
  ===============================================================
*/
const PORT = process.env.PORT || 8080

//Listing to the app and running it on PORT 5000

app.listen(PORT, async () => {
   console.log(`listen on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello!')
    });