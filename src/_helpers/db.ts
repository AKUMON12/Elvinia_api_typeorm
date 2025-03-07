import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../users/user.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Tristan69-",
    database: "user_management",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));