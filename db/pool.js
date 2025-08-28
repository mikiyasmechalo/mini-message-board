import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const dbUrl = process.env.DB_URL || "NOT SET";

if (dbUrl !== "NOT SET") {
  const masked = dbUrl.replace(/:\/\/.*@/, "://****:****@");
  console.log("DB_URL (masked):", masked);
} else {
  console.log("DB_URL is NOT set!");
}


export default new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
