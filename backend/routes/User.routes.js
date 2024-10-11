import { Router } from "express";
const router = Router();
import { UserSignup, UserLogin } from "../controllers/User.controllers.js";
import {uploadPdf,fetchpdf} from '../controllers/Pdf.controller.js'
import { upload, uploadFileToCloudinary } from '../utils/cloudinary.js';
import { userFetchData } from "../controllers/User.controllers.js";
import { SendEmail } from "../controllers/Pdf.controller.js";

router.route('/register').post(UserSignup);
router.route('/login').post(UserLogin);
// router.route('/logout').post(UserLogout);
router.post('/uploadpdf', upload.single('pdfurl'), uploadFileToCloudinary, uploadPdf);
router.post('/fetchpdf',fetchpdf)
router.post('/useremailfetch',userFetchData)
router.post('/send-email',SendEmail)

export default router;
