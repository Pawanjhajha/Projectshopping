const router=require('express').Router()
const regc=require('../controller/regcontroller')
const productc=require('../controller/productcontroller')
const checkoutc=require('../controller/checkoutcontroller')
const multer=require('multer')

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../shoppingcart/public/productimages')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

let upload=multer({
    storage:storage,
    limits:{fileSize:1024*1024*4}
})




router.post('/reg',regc.registration)
router.post('/logincheck',regc.logincheck)
router.post('/addproduct',upload.single('img'),productc.addproduct)
router.get('/allproduct',productc.allproduct)
router.get('/singleproduct/:id',productc.singleproduct)
router.put('/productupdate/:id',upload.single('img'),productc.productupdate)
router.delete('/productdelete/:id',productc.productdelete)
router.get('/usershow',regc.usershow)
router.get('/instockproducts',productc.instockproducts)
router.post('/cartproducts',productc.cartproducts)
router.post('/cart/:username',productc.cartproduct)
router.post('/cart/:username',checkoutc.cartvalue)

module.exports=router