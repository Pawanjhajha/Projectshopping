const Checkout=require('../module/checkout')
const Product=require('../module/products')




exports.cartvalue=async(req,res)=>{
    const{item}=req.body
    const{username}=req.params.username
    console.log(username)
    for (const id in item) {
        console.log(id)
        // const record=await Product.findById(id)
        // console.log(record)
        // console.log(username)
    }
   
}