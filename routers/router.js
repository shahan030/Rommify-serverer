const express= require('express')
const productController =require("../controller/productController")
const testimonialController=require("../controller/testmoelController")
const usersController=require("../controller/userContrller")
const downloadController=require("../controller/downloadRecipeController")
const saveProdiuctController=require("../controller/saveProductController")
const jwtMiddlewere = require('../controller/jwtMiddlewere')
 
const router= new express.Router()

router.get('/all-product',productController.getallproductController)

// testmonial

router.post("/add-testimonil",testimonialController.addTestmoelController)

//register
router.post("/register",usersController.adduserConteroller)

//login
router.post("/login",usersController.addLoginController)

//single recipe
router.get('/product/:id/view',jwtMiddlewere,productController.getaProductdeails)

//related product
router.get('/relate/product/:id/view',jwtMiddlewere,productController.realtedProducts)

//downiad prodouct
router.post('/product/:id/download',jwtMiddlewere,downloadController.addtoDownloadRecipe)

//save product
router.post('/product/:id/save',jwtMiddlewere,saveProdiuctController.addToSavedProduct)

//get saved product
router.get('/get-savedProduct',jwtMiddlewere,saveProdiuctController.getUserSavedproduct)

//delete saved product
router.delete('/product/:id/delete',jwtMiddlewere,saveProdiuctController.removeSavedProductController)

//userDownload product
router.get('/user-download',jwtMiddlewere,downloadController.getUserDownloadProducts)

//edid user profile
router.post('/user/edit',jwtMiddlewere,usersController.editUserController)

//getall user
router.get('/all-users',jwtMiddlewere,usersController.getAllUserController)

//get all download product
router.get("/get-all-download",jwtMiddlewere,downloadController.getAlllDownloads)

//get all testmonial
router.get("/get-all-testimonial",jwtMiddlewere,testimonialController.getAllTestmoelController)

//updated-testimonial
router.get("/feedback/:id/edit",jwtMiddlewere,testimonialController.editTestmoelController)

//get all approved testimonial
router.get("/approved-testimonial",testimonialController.getallApprovedTestmoelController)
//addnewProducts create

router.post("/add-newProdus",jwtMiddlewere,productController.addProductController)
//edit new produts
router.put("/prodcut/:id/edit",jwtMiddlewere,productController.editProductController)

//delete Products
router.delete("/prodcut/:id/delete",jwtMiddlewere,productController.deleteProductController)
module.exports=router

