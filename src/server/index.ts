import morgan from "morgan";
import express from "express";
import { app } from "./app.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import mechasRouter from "../features/mechas/router/mechasRouter.js";
import cors from "cors";

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/mechas", mechasRouter);
app.get("/", pingRouter);
