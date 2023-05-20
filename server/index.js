const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors")
app.use(cors())

const lemonadeMaker = require("./lemonadeMaker")

function blockIp(req, res, next) {
    if(req.ip == "::ffff:127.0.0.1"){
        next()
    }
    else {
        res.send({"error": true, "response": "what are you even doing here bruh", "code": -4})
    }
}
app.use(blockIp)

app.all("/api/add-lemonade/:clicks", lemonadeMaker.rateLimit,(req, res) => {
    lemonadeMaker.addLemonade.push({req, res})
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})