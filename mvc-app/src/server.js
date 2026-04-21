import express from 'express';
import { router as mallRtr } from "./routers/mall-router.js";
import { router as bookRtr } from "./routers/book-router.js";

const app = express();

//mounting the router
app.use("/api", mallRtr);
app.use("/books", bookRtr);

const port = 8000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));