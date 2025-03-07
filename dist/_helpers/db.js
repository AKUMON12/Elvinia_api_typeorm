"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Tristan69-",
    database: "user_management",
    synchronize: true,
    logging: false,
    entities: [user_entity_1.User],
    migrations: [],
    subscribers: [],
});
exports.AppDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));
