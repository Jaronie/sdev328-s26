<<<<<<< HEAD
import express from 'express';
import * as ctl from "../controller/book-controller.js";

export const router = express.Router();

router.get("/chapters", ctl.getChapters);
router.get("/title", ctl.getTitle);
router.get("/pages", ctl.getPages);
router.get("/author", ctl.getAuthor);
router.get("/all", ctl.allBook);
router.get("/details", ctl.getField);
=======
import express from 'express';
import * as ctl from '../controller/book-controller.js';

export const router = express.Router();

router.get("/chapters", ctl.getChapters);
router.get("/title", ctl.getTitle);
router.get("/pages", ctl.getPages);
router.get("/author", ctl.getAuthor);
router.get("/all", ctl.allBook);
router.get("/details", ctl.getField);
>>>>>>> 021301ff2e92eb7f9a9ebc4f813cc6a6655721bc
router.get("/print", ctl.printAll);