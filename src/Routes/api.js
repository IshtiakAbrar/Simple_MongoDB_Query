const express= require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const postController= require('../Controllers/postController');
const subAdminController= require('../Controllers/subAdminController');
const userController= require('../Controllers/userController');




router.get("/adminController1",adminController.create);
router.get("/adminController2",adminController.read);
router.get("/adminController3",adminController.delete);
router.get("/adminController4",adminController.update);

router.get("/postController1",postController.create);
router.get("/postController2",postController.read);
router.get("/postController3",postController.delete);
router.get("/postController4",postController.update);

router.get("/subAdminController1",subAdminController.create);
router.get("/subAdminController2",subAdminController.read);
router.get("/subAdminController3",subAdminController.delete);
router.get("/subAdminController4",subAdminController.update);

router.get("/userController1",userController.create);
router.get("/userController2",userController.read);
router.get("/userController3",userController.delete);
router.get("/userController4",userController.update);


module.exports=router;