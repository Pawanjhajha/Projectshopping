const Reg=require('../module/reg')

exports.registration=async(req,res)=>{
    const {username, password}=(req.body)
    try{
      const usercheck=await Reg.findOne({username:username})
      if(usercheck==null){
        const record=new Reg({username:username,password:password})
      record.save()
      res.json({
        status:201,
        apiData:record,
        message:'Successfully account has been created'
      })
    }else{
      res.json({
        status:400,
        message:`${username} is Already Taken`
      })
    }
    }catch(error){
        res.json({
            status:400,
            message:error.message
        })
    }
}

exports.logincheck=async(req,res)=>{
  const{username,password}=req.body
  try{
  const record=await Reg.findOne({username:username})
  if(record!==null){
    if(record.password==password){
      res.json({
        status:200,
        apiData:record
      })

    }else{
      res.json({
        status:400,
        message:"Wrong Credentials"
      })
    }
  }else{
    res.json({
      status:400,
      message:"Wrong Credentials"
    })
  }
}catch(error){
  res.json({
    status:400,
    message:error.message
  })
}
}

exports.usershow=async(req,res)=>{
  try{
  const record=await Reg.find()
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
