import {
  getAllMessaegs,
  getMessageDetails as getMD,
  addNewMessage,
} from "../db/queries.js";
import { body, validationResult } from "express-validator";

const validateMessage = [
  body("username").trim().notEmpty().withMessage("Name is required"),
  body("text").trim().notEmpty().withMessage("Message field can not be empty"),
];

export async function getMessages(req, res) {
  const messages = await getAllMessaegs();
  res.render("index", { messages: messages, title: "Mini Message Board" });
}

export async function getMessageDetails(req, res) {
  console.log("id:", parseInt(req.params.messageId));
  const message = await getMD(parseInt(req.params.messageId));
  res.render("msgDetails", { message });
}

export const addMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).render("form", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const messageText = req.body.message;
    const messageUser = req.body.author;
    await addNewMessage(messageUser, messageText);
    res.redirect("/");
  },
];
