import { Router } from 'express';
import { register, login, forgetPassword, resetPassword, deleteAccount, logout, getData, completeProfile } from '../controller/registration.controller';
import { UserValidation } from '../middleware/registrationValidation.middleware';
import { authenticateJWT } from '../middleware/jwtAuthentication.middleware';
const router = Router();
router.post('/register', UserValidation.createUser, register);
router.post('/profiledetails',  completeProfile);
router.post('/login', UserValidation.login, login);
router.post('/forgetpassword', UserValidation.forgetPassword, authenticateJWT, forgetPassword);
router.put('/resetpassword', UserValidation.resetPassword, authenticateJWT, resetPassword);
router.delete('/deleteaccount', authenticateJWT, deleteAccount);
router.get('/logout', authenticateJWT, logout);
router.get('/getdata', authenticateJWT, getData);
export default router;