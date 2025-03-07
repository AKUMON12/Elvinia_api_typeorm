"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Tristan69-",
    database: "user_management",
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
};
