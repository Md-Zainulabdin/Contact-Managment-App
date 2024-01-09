import { Router } from "express";

const router = Router();

router.route("/user").post((req, res) => {
  const { name, email, password } = req.body;
  
});

export default router;
