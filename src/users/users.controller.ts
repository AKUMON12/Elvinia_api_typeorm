import express, { Request, Response } from "express";
import { getAll, create } from "./user.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    res.json(await getAll());
});

router.post("/", async (req: Request, res: Response) => {
    res.json(await create(req.body));
});

export default router;
