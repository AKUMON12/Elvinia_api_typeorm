"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const users_controller_1 = __importDefault(require("./users/users.controller")); // Ensure this path is correct
const db_1 = require("./_helpers/db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", users_controller_1.default);
db_1.AppDataSource.initialize()
    .then(() => {
    app.listen(4000, () => console.log("Server running on port 4000"));
})
    .catch((error) => console.log("Error: ", error));
