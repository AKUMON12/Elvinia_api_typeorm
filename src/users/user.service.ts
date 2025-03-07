import { AppDataSource } from "../_helpers/db";
import { User } from "./user.entity";
import { Repository } from "typeorm";

// Ensure that AppDataSource is initialized before using it
if (!AppDataSource.isInitialized) {
    AppDataSource.initialize()
        .then(() => console.log("Database connection initialized ✅"))
        .catch((error) => console.log("Error initializing database ❌:", error));
}

const userRepository: Repository<User> = AppDataSource.getRepository(User);

export async function getAll(): Promise<User[]> {
    return await userRepository.find();
}

export async function getById(id: number): Promise<User | null> {
    return await userRepository.findOne({ where: { id } });
}

export async function create(params: Partial<User>): Promise<User> {
    const user = userRepository.create(params);
    return await userRepository.save(user);
}
