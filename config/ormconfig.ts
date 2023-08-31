import { DataSource } from "typeorm";

import dotenv from "dotenv";
import { Contact } from "../src/Entities/Contact.entity";
dotenv.config();

const connectDB = new DataSource({
  type: "postgres",
  url: "postgres://rohit:FQoH7JNkMf7j6G9Qy2kusHeRTOkTwxSO@dpg-cjoaodj58phs73bm0p10-a.singapore-postgres.render.com/bitespeed_backend",
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
