const DDG = require('duck-duck-scrape');

var ips = {}

function rateLimit(req, res, next) {
    let ip = getIp(req)
    if(ips[ip] == undefined) {
        ips[ip] = (Date.now()/1000)
        next()
    }
    else if((ips[ip] + 3) > (Date.now()/1000)) {
        res.send({"error": true, "response": "stop, we said 3 seconds of wait time", "code": -2})
        
    }
    else{
        ips[ip] = (Date.now()/1000)
        next()
    }
}

async function ddg(req, res) {
    let query = req.params.query;
    try{
        await DDG.search(query, {
            safeSearch: DDG.SafeSearchType.STRICT,
        }).then((data) => {
            let response = {"error": false, "response": data.results}
            res.send(response)
        });
    }
    catch(err) {
        console.log(err)
    }
};

function getIp(req) {
    return req["headers"]["x-forwarded-for"]
}

exports.ddg = ddg
exports.rateLimit = rateLimit