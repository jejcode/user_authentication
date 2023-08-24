import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./Config/mongoose.config.js";
// import recipeRouter from "./routes/recipe.routes.js";
// import menuRouter from "./routes/menu.routes.js";

const app = express();
dotenv.config();
const { PORT } = process.env
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(cors({ origin: 'http://localhost:5173' }));

// direct routes need to come after middleware
// app.use("/api/recipes", recipeRouter);
// app.use("/api/menus", menuRouter);
// const myFirstSecret = process.env.FIRST_SECRET_KEY
const serverStart = async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => console.log("Database is loaded."));
  } catch (err) {
    console.log(err);
  }
};

await serverStart();
