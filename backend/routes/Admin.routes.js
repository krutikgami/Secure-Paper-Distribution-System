import { Router } from "express";
import { AdminSignin } from "../controllers/Admin.controllers.js";

const router = Router();

router.route('/adminlogin').post(AdminSignin);

export default router;