import { Router } from "express";

const router = Router();

router.route("/auth").post((req, res) => {
  res.send("Hello world");
});

export default router;
