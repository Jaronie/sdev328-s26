import express from 'express';
import { router as mallRtr } from "./routers/mall-router.js";
<<<<<<< HEAD
import { router as bookRtr } from "./routers/book-router.js";
import { router as nameRtr } from "./routers/name-router.js";
=======
import { router as bookRtr } from './routers/book-router.js';
import { router as nameRtr } from './routers/name-router.js';
>>>>>>> 021301ff2e92eb7f9a9ebc4f813cc6a6655721bc

const app = express();

//mounting the router
<<<<<<< HEAD
app.use("/api", mallRtr);
app.use("/books", bookRtr);
app.use("/me", nameRtr);
=======
app.use("/api/malls", mallRtr);
app.use("/api/book", bookRtr);
app.use("/api/name", nameRtr);
>>>>>>> 021301ff2e92eb7f9a9ebc4f813cc6a6655721bc

const port = 8000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));