<<<<<<< HEAD
import express from 'express';
import * as ctl from "../controller/name-controller.js";

export const router = express.Router();

router.get("/:fName/:lName/:nickName/:age", ctl.printName);
=======
import { printName, printAge } from '../controller/name-controller.js';
import express from 'express';

export const router = express.Router();

router.get("/:fname/:lname/:nickname", printName);
router.get("/:age", printAge);
>>>>>>> 021301ff2e92eb7f9a9ebc4f813cc6a6655721bc
