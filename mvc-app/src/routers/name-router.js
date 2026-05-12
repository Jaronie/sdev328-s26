import express from 'express';
import * as ctl from "../controller/name-controller.js";

export const router = express.Router();

router.get("/:fName/:lName/:nickName/:age", ctl.printName);
