import pool from "./pool.js";

export async function getAllMessaegs() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

export async function getMessageDetails(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);
  console.log(rows);
  return rows[0];
}

export async function addNewMessage(username, text) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [
    username,
    text,
  ]);
}
