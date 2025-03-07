export default {
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