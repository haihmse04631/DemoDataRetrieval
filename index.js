const IOTA = require('iota.lib.js')
const UTIL = require('./common_util/utility.js')
const util = new UTIL()
const iota = new IOTA({ provider: 'http://localhost:14700' })
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// iota.api.getNodeInfo(function(error, success) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(success);
//     }
// })

var seed = `VERTAWNTFULJCUNRZXPVBHQKBTSOOPPPNRBQ9AUYDRDFPVIJBIOBLNLNS9GGVUHXIJCHTCVOQQGVRY9IH`
var seed2 = `VERTAWNTFULJCUNRZXPVBHQKBTSEOPPPNRBQ9AUYDRDFPVIJBIOBLNTNS9GGVUHXIJCHTCVOQQGVRY9IH`
var address = `OJXBFNYDMJITDUNA9AINIQLVQCGQCGUVNNTSRJYZDZMGGZANBXT9GDVGGADOCIRYM9HYBRSNVV9QAKDQAWLVQK9MAW`
var st = `ADAVAS99ASDWV9DAsd9AADASd9999999999999999999999999999999999999999999999999ACAs9999999`
// var accountData = util.getAccountData(seed)
// console.log(accountData);

// iota.api.getAccountData(seed, function(error, data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
        
//     }
// })

function getAllTranfer(address){
    
}
var message = iota.utils.toTrytes(`Hello World!!!`)
var message3 = iota.utils.toTrytes(`Hello World33333`)
const tranfers = [
    {
        value: 5,
        address: address,
        message: message
    },
    {
        value: 7,
        address: address,
        message: message3
    },
    {
        value: 0,
        address: address,
        message: message3
    }
]

const tranfers2 = [
    {
        value: 0,
        address: address,
        message: message
    },
]

function sendData(seed, tranfers){
    iota.api.sendTransfer(seed, 3, 9,tranfers,function(error, success){
        if(error){
            console.log(error);
        }else{
            console.log(success);
        }
    })
}

sendData(seed, tranfers2)



