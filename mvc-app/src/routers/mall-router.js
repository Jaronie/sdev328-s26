import { Router } from 'express';
import { allMalls, mallById, mallLocations } from '../controller/mall-controller.js';

//create an express router
export const router = Router();

//define a route
<<<<<<< HEAD
router.get("/malls", allMalls);
router.get("/mall", mallById);
=======
router.get("/all", allMalls);
router.get("/byid", mallById);
>>>>>>> 021301ff2e92eb7f9a9ebc4f813cc6a6655721bc
router.get("/locations", mallLocations);