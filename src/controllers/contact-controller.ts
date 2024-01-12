import { Request, Response } from "express";
import Contact from "../models/contact.model";
import { verifyEmail } from "../helpers";

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;

    if (
      [name, email, phone].some(
        (field) => typeof field !== "string" || field.trim().length === 0
      )
    ) {
      return res.status(400).json({ error: "Every field is required!" });
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // testing left

    if (!emailRegex.test(email)) {
      res.status(403).send({ message: `Please enter a valid Email!` });
      return;
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
    });

    return res.status(201).json({ msg: "Contact created successfully" });
  } catch (error) {
    console.log("Error in creating new contact", error);
    res.status(500).json({ error: "Server Error!" });
  }
};

export const getAllContact = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json({ contacts });
  } catch (error) {
    console.log("Error in getting all contacts", error);
    return res.status(500).json({ error: "Server Error!" });
  }
};

export const updateContact = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, email, phone } = req.body;

    if (!id) {
      return res.status(400).json({ msg: "id is required!" });
    }

    if (
      [name, email, phone].some(
        (field) => typeof field !== "string" || field.trim().length === 0
      )
    ) {
      return res.status(400).json({ error: "Every field is required!" });
    }

    if (verifyEmail(email)) {
      res.status(403).send({ message: `Please enter a valid Email!` });
      return;
    }

    const updateContact = await Contact.findOneAndUpdate({
      _id: id,
      name,
      email,
      phone,
    });

    return res.status(201).json({ msg: "Contact Updated successfully" });
  } catch (error) {
    console.log("Error in updating contact", error);
    res.status(500).json({ error: "Server Error!" });
  }
};

export const deleteContact = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ msg: "id is required!" });
    }

    const deleteContact = await Contact.deleteOne({
      _id: id,
    });

    return res.status(200).json({ msg: "Contact deleted!" });
  } catch (error) {
    console.log("Error in deleting contact", error);
    res.status(500).json({ error: "Server Error!" });
  }
};
