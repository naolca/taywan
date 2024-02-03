import { cleanEnv, port, str } from "envalid";
import { config } from "dotenv";

config();
const validateEnv = () =>{
    cleanEnv(process.env, {
        // NODE_ENV: str(), 
        PORT: port(),
    })
}

export default validateEnv;