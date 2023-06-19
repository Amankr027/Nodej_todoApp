import express from 'express';
import {  getMyProfile, logIn, logout, register } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();



router.post("/new", register);

router.post("/login",logIn);

router.get("/logout",logout)

router.get("/me",isAuthenticated,getMyProfile);


export default router;