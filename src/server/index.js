const express = require("express")
const port = 8000;
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const {analyze} = require("./mockAPI");


// using cors 
app.use(cors())
//configure my env files
dotenv.config()

const key = process.env.API_KEY

//read the json files coming to you 
app.use(express.json())


app.get("/", (req, res) =>{
    res.send("server page read")
})

app.post("/", async (req,res) => {
    const url = req.body.input;
    const Analyze = await analyze(url, key)
    const {code, msg, sample} = Analyze
    if(code == 100 || code == 212 ){
      return  res.send({msg: msg, code: code})
    }
    return res.send({sample: sample, code: code}) 
})






app.listen(8000, () => console.log(`server is listening on port ${port}`))
