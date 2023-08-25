import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const { TOKEN_KEY } = process.env;

const createSecretToken = (id) => {
  return jwt.sign({ id }, TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export { createSecretToken };
