import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connetDB from "./config/config.js";
import rouutes from "./routes/routes.js";

dotenv.config();
connetDB();

const app = express();
app.use(express.json());
app.use(cors);

app.use("/api/auth", rouutes);
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log("Server is ruuning on PORT 3500"));
