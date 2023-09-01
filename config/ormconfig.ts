import { DataSource } from "typeorm";

import dotenv from "dotenv";
import { Contact } from "../src/Entities/Contact.entity";
dotenv.config();

const connectDB = new DataSource({
  type: "postgres",
  url: process.env.DB_EXTERNAL_URL,
  entities: [Contact],
  synchronize: true,
  ssl: false,
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
