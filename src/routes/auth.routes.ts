import { Router } from "express";
import { loginUser } from "../controllers/auth.controller";
import { tokenName } from "../config/constant";

const router = Router();

router.route("/auth").post(loginUser);
router
  .route("/auth/logout")
  .post((req, res) =>
    res.clearCookie(tokenName).send({ message: "Logout successful" })
  );

export default router;
