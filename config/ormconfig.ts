import { DataSource } from "typeorm";

import dotenv from "dotenv";
dotenv.config();

const connectDB = new DataSource({
  type: "postgres",
  // url: "postgres://rohit:FQoH7JNkMf7j6G9Qy2kusHeRTOkTwxSO@dpg-cjoaodj58phs73bm0p10-a:5432/bitespeed_backend",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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
