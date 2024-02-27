let User=require('../models/user.model')
let bcrypt=require('bcrypt')
let generateToken=require('../utlis/generateToken')
 const signup=async (req,res)=>{
try{
    let {fullName,username,password,confirmPassword,gender}=req.body;
    if(password!==confirmPassword){
        res.status(400).json({error:'passwords did not match'})
    }

    let user=await User.findOne({username})
    if(user){
        res.status(400).json({error:'username already exists'})
    }

    let salt=await bcrypt.genSalt(10);
    let hashPassword=await bcrypt.hash(password,salt)

    
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

   const newUser=new User({
       fullName,
       username,
       password:hashPassword,
       gender,
       profilePic:gender==='male'?boyProfilePic:girlProfilePic
   })

   if(newUser){
    generateToken(newUser._id,res)
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic
      })
   }

}
catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
}
    
}

 const login=async(req,res)=>{
try{
    let {username,password}=req.body;
    let user=await User.findOne({username})

    let checkPassword=await bcrypt.compare(password,user?.password || "")

    if(!user || !checkPassword){
        res.status(400).json({error:'invalid username or password'})
    }
    

    generateToken(user._id,res)
    

    res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
    });

}

catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
}
    
}

 const logout=(req,res)=>{
   try{
    res.cookie('jwt',"",{
        maxAge:0
    })
    res.status(200).json({message:'loggedOut successfully'})
   }
   catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
}
}



module.exports = {
    signup: signup,
    login:login,
    logout:logout
};

