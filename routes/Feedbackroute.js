import { createAdmin, createStudent,createAlumini,getAllUser} from "../controller/usercontroller.js";
import { createCompany, getCompanies } from "../controller/companycontroller.js";
import { createReview,getAllReviews } from "../controller/reviewcontroller.js";
import { likeReviews } from "../controller/likescontroller.js";
import { isAdmin } from "../middleware/Middleware.js";
import express from "express";
const router = express.Router()

router.post('/admin/create',createAdmin);
router.post('/alumini/create',createAlumini);
router.post('/student/create',createStudent);
router.post('/company/create',isAdmin,createCompany);
router.post('/review/create',createReview);
router.post('/likes/add',likeReviews);

router.get('/user/get',getAllUser);
router.get('/company/get',getCompanies);

export default router;