import { Router } from "express";
import { greeting } from "../controllers/greeting";

// create routes here...

const router = Router();

router.get("/", greeting);

export default router;
