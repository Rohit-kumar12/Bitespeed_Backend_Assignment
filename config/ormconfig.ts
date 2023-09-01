import { DataSource } from "typeorm";

import dotenv from "dotenv";
import { Contact } from "../src/Entities/Contact.entity";
dotenv.config();

const connectDB = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Contact],
  synchronize: true,
});

const connection = async () => {
  await connectDB
    .initialize()
    .then(() => {
      console.log("Data source has been Initialized");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connection;
