import { Router } from "express";
import {
  createContact,
  deleteContact,
  getAllContact,
  updateContact,
} from "../controllers/contact-controller";

const router = Router();

router.route("/contacts").get(getAllContact);
router.route("/contact").post(createContact);
router.route("/contact/:id").delete(deleteContact);
router.route("/contact/:id").put(updateContact);

export default router;
