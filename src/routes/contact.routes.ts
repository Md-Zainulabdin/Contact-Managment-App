import { Router } from "express";
import {
  createContact,
  getAllContact,
} from "../controllers/contact-controller";

const router = Router();

router.route("/contacts").get(getAllContact);
router.route("/contact").post(createContact);

export default router;
