// server.ts
import express from "express";
import "reflect-metadata";

import usersController from "./users/users.controller"; // Ensure this path is correct
import { AppDataSource } from "./_helpers/db";

const app = express();
app.use(express.json());
app.use("/users", usersController);

AppDataSource.initialize()
    .then(() => {
        app.listen(4000, () => console.log("Server running on port 4000"));
    })
    .catch((error: unknown) => console.log("Error: ", error));