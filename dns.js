const dns = require('dns')

// console.log(dns.getServers())

dns.resolve('www.youtube.com', function (err,address){
    if (err) { console.error(err)}
    console.log(address)
})