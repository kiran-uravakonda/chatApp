let jwt=require('jsonwebtoken')

const generateToken=(userId,res)=>{
    let token=jwt.sign({userId},process.env.JWT_SECRETEKEY,{
        expiresIn:'1d'
    })

    res.cookie("jwt", token, {
		maxAge: 1 * 24 * 60 * 60 * 1000, 
		httpOnly: true,
		secure: process.env.NODE_ENV !== "production",
	});
}

module.exports=generateToken;