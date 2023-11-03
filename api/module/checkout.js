const mongoose=require('mongoose')

const checkoutSchema=mongoose.Schema({
    productname:String,
    uname:String,
    qty:Number
})

mongoose.model('checkout',checkoutSchema)