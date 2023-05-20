const mongoose = require("mongoose")
const Country = require("./Country")
mongoose.connect('mongodb://127.0.0.1:27017/lemonadeMaker');

const async = require("async")
const geoip = require('geoip-country');

var ips = {}



function rateLimit(req, res, next) {
    let ip = getIp(req)
    if(ips[ip] == undefined) {
        ips[ip] = (Date.now()/1000)
        next()
    }
    else if((ips[ip] + 10) > (Date.now()/1000)) {
        res.send({"error": true, "response": "stop, we said 10 seconds of wait time", "code": -3})
        
    }
    else{
        ips[ip] = (Date.now()/1000)
        next()
    }
}

const clickQueue = async.queue(async (task) => {
    if((parseInt(task.req.params.clicks) < 0)) {
        task.res.send({"error": true, "response": "number can't be negative", "code": -2})
    }
    else if(parseInt(task.req.params.clicks) > 500) {
        task.res.send({"error": true, "response": "you can't make that much lemonade in 10 seconds", "code": -1})
    }
    else{
        let ip = getIp(task.req)
        let country = getCountry(ip)
        let lemonade = BigInt((await Country.findOne({id: country})).lemonade)
        lemonade += BigInt(task.req.params.clicks)
        await Country.findOneAndUpdate({id: country, lemonade: String(lemonade)})
        task.res.send({"error": false, "response": String(lemonade)})
    }
}, 1)
function getIp(req) {
   return req["headers"]["x-forwarded-for"]
}

function getCountry(ip) {
    let geo = geoip.lookup(ip);
    return geo.country.toLowerCase()
}

exports.addLemonade = clickQueue
exports.rateLimit = rateLimit