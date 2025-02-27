let express = require("express");
const authrouter = require("./Module/auth.module");
const connectdb = require("./lib/db.connect");

let app = express();


connectdb()

app.use(express.json())

app.use("/auth",authrouter)

app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})