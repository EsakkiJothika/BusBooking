const signupdata = require("../model/signup.module")

module.exports = {

    signup : (req,res)=>{

        

        

        let {username,password,email} = req.body

        signupdata.create({username:username,email:email,password:password})

        .then(()=>{
            res.send("Account Created")
        })
        .catch(()=>{
            res.send("Error occured in creating account")
        })
    }
}