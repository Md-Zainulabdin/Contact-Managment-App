import { Router } from "express";
import { loginUser } from "../controllers/auth.controller";

const router = Router();

router.route("/auth").post(loginUser);

export default router;
