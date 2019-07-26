import express from "express";
import cors from "cors";

import { products } from "./mocks/products";

const MOCK_SERVER_PORT = process.env.MOCK_SERVER_PORT || 3000;
const app: express.Application = express();

app.get(`/products`, cors(), (_, res) => {
  res.json(products);
});

app.listen(MOCK_SERVER_PORT, () => {
  console.log(`Mock server running on port ${MOCK_SERVER_PORT}`);
});
