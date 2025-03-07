"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
const db_1 = require("../_helpers/db");
const user_entity_1 = require("./user.entity");
// Ensure that AppDataSource is initialized before using it
if (!db_1.AppDataSource.isInitialized) {
    db_1.AppDataSource.initialize()
        .then(() => console.log("Database connection initialized ✅"))
        .catch((error) => console.log("Error initializing database ❌:", error));
}
const userRepository = db_1.AppDataSource.getRepository(user_entity_1.User);
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield userRepository.find();
    });
}
function getById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield userRepository.findOne({ where: { id } });
    });
}
function create(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = userRepository.create(params);
        return yield userRepository.save(user);
    });
}
