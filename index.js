import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { connect } from "./config/db.config.js";
import { beerRouter } from "./routes/beer.routes.js";

dotenv.config();
connect();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", beerRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
