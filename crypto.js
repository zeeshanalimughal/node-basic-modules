var crypto = require('crypto');

console.log(crypto.getCiphers())

// var key = crypto.createCipher('aes-256-cbc','admin123')

// var str = key.update('This is a secret message','utf8','hex')

// str+=key.final('hex')

// console.log(str)


// da8097fc5a084b459dedd9ec8d4261ca7ad1ee591b012aff879b55aa956f5037


// var key = crypto.createDecipher('aes-256-cbc','admin123')

// var newText = key.update('da8097fc5a084b459dedd9ec8d4261ca7ad1ee591b012aff879b55aa956f5037','hex','utf8')

// newText+=key.final('utf8')

// console.log(newText)


