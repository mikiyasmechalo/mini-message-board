import { Router } from "express";

const router = new Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    added: new Date(),
  });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const messageText = req.body.message;
  const messageUser = req.body.author;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
    id: messages.reverse()[0].id + 1,
  });
  res.redirect("/");
});

router.get("/message/:messageId", (req, res) => {
  const message = messages.find(
    (message) => message.id === parseInt(req.params.messageId)
  );
  if (message) res.render("msgDetails", { message: message });
  else res.send("Message Not Found");
});

export default router;
