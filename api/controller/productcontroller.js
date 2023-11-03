const Product = require('../module/products')


exports.addproduct = (req, res) => {

    const { name, desc, price, qty } = req.body
    // console.log(req.file)
    try {
        if (req.file) {
            const filename = req.file.filename
            var record = new Product({ name: name, img: filename, desc: desc, price: price, qty: qty, })
            record.save()
        } else {
            var record = new Product({ name: name, desc: desc, price: price, qty: qty, })
            record.save()
        }

        res.json({
            status: 201,
            apiData: record,
            message: "Successfully Product has been Added"
        })
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}

exports.allproduct = async (req, res) => {
    try {
        const record = await Product.find()
        res.json({
            status: 200,
            apiData: record,
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

exports.singleproduct = async (req, res) => {
    const id = req.params.id
    try {
        const record = await Product.findById(id)
        // console.log(record)
        res.json({
            status: 200,
            apiData: record
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })

    }
}

exports.productupdate = async (req, res) => {
    const id = req.params.id
    const { name, desc, price, qty, status } = req.body
    try{
        if(req.file){
            const filename = req.file.filename
            await Product.findByIdAndUpdate(id, {name: name,img: filename,desc: desc,price: price,status: status,qty: qty})
            }else{
                await Product.findByIdAndUpdate(id, {name: name,desc: desc,price: price,status: status,qty: qty})
            }
            res.json({
                status:200,
                message:'Successfully Product Data updated'
            })
    }catch(error){
            res.json({
                status:500,
                message:error.message
            })
    }

}

exports.productdelete=async(req,res)=>{
    const id=req.params.id
    try{
    await Product.findByIdAndDelete(id)
    res.json({
        status:200,
        message:'Successfully Record Has Been Deleted.'
    })
    }catch(error){
        res.json({
            status:500,
            message:error.message
        })
    }
}

exports.instockproducts=async(req,res)=>{
    try{
    const record=await Product.find({status:'IN-STOCK'})
    // console.log(record)
    res.json({
        status:200,
        apiData:record
    })
    }catch(error){
        res.json({
            status:500,
            message:error.message
        })
    }
}

exports.cartproducts=async(req,res)=>{
   try{
    const{ids}=req.body
    const record=await Product.find({_id:{$in:ids}})
    // console.log(record)
    res.json({
        status:200,
        apiData:record
    })
   }catch(error){
    res.json({
        status:500,
        message:error.message
    })
   }
}
 
exports.cartproduct=async(req,res)=>{
    const{item}=req.body
    const{username}=req.params.username
    
    for (const id in item) {
       const record=await Product.findById(id)
       
        console.log(record.name)
        
        
       
    }
   
}