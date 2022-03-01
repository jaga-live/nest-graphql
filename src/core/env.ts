import { config } from "dotenv";

config()


export const ENV = {
    NODE_ENV : process.env.NODE_ENV,
    MONGO_DEV : process.env.MONGO_DEV,
}