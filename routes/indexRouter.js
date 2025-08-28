import { Router } from "express";
import {
  addMessage,
  getMessageDetails,
  getMessages,
} from "../controllers/messageController.js";

const router = new Router();

router.get("/", getMessages);

router.get("/new", (req, res) => {
  res.render("form");
});
router.get("/message/:messageId", getMessageDetails);

router.post("/new", addMessage);
// router.post("/new", (req, res) => {
//   const messageText = req.body.message;
//   const messageUser = req.body.author;
//   messages.push({
//     text: messageText,
//     user: messageUser,
//     added: new Date(),
//     id: messages.reverse()[0].id + 1,
//   });
//   res.redirect("/");
// });
// router.get("/message/:messageId", (req, res) => {
//   const message = messages.find(
//     (message) => message.id === parseInt(req.params.messageId)
//   );
//   if (message) res.render("msgDetails", { message: message });
//   else res.send("Message Not Found");
// });

export default router;
