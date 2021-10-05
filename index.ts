import express from "express";
import "express-async-errors";
import { router } from "./routes";
import { errorMiddleware } from "./middlewares/error";

const app = express();

app.use(express.json());

app.use(router);

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
