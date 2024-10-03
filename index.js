const express = require("express")
const app = express()
const PORT = 3000

app.get("/",function(req,res){
res.send("javascript + sql")
})

app.listen(PORT, () => {
    try {
        console.log("rodando")
    } catch (e) {
        console.log(e)
    }
})