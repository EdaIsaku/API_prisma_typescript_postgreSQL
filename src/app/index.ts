import * as dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";
import helmet from "helmet";
//@ts-ignore
import xss from "xss-clean";

import { router } from "../routes/user";

const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(xss());

//Routes
app.use("/api/v1/", router);

// process.on("uncaughtException", (err) => {
//   console.log(err), process.exit(1);
// });

export { app };
