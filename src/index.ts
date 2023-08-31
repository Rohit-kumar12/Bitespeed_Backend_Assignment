import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connection from "../config/ormconfig";
dotenv.config();

const app: Express = express();
// Parse JSON
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//PORT
const port = 8080;

app.listen(port, () => {
  connection();
  console.log(`Server is running on port ${port}`);
});
