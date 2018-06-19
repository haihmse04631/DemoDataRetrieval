const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'http://localhost:14700' })
const UTIL = require('./common_util/utility.js')
const util = new UTIL()
// const readline = require('readline')``
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// iota.api.getNodeInfo(function(error, success) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(success);
//     }
// })

var seed = `VERTAWNTFULJCUNRZXPVBHQKBTSOOPPPNRBQ9AUYDRDFPVIJBIOBLNLNS9GGVUHXIJCHTCVOQQGVRY9IH`
var seed2 = `KNEPVOCHZPOWAPIBPGFWCFA9OCZLWPTLYB9JGFKKAVX9HYXBOBIEAJSPYDHBUSQEBLVVYROZPGYDQGAXP`
var address = `OJXBFNYDMJITDUNA9AINIQLVQCGQCGUVNNTSRJYZDZMGGZANBXT9GDVGGADOCIRYM9HYBRSNVV9QAKDQAWLVQK9MAW`
var address2 = `XHTURPRECWLRWRYTZCGFA9XTIRFNWDQKXZUWLBMFZTIXSJLGVDWFAGUDKLV9HIAKDNXNWMPMCYC9VOLCC`

// var accountData = util.getAccountData(seed)
// console.log(accountData);



var message = iota.utils.toTrytes(`Hello World!!!`)
var message3 = iota.utils.toTrytes(`Hello World33333`)
const tranfers = [
    {
        value: 5,
        address: address2,
        message: message
    },
    {
        value: 7,
        address: address2,
        message: message3
    },
    {
        value: 0,
        address: address2,
        message: message3
    }
]

const tranfers2 = [
    {
        value: 0,
        address: address2,
        message: message
    },
]

function getAccountData(seed) {
    iota.api.getAccountData(seed, function (error, data) {
        if (error) {
            console.log(error);

        } else {
            console.log(data);

        }
    })
}

function sendData(seed, tranfers) {
    iota.api.sendTransfer(seed, 3, 9, tranfers, function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);
        }
    })
}

function dataRetrieval(seed) {
    iota.api.getTransfers(seed, function (error, success) {
        if (error) {
            console.log(error);

        } else {
            for (let i = 0; i < success.length; i++) {
                success[i].forEach(element => {
                    console.log(`hash: ${element.hash} - value: ${element.value}`);
                });
            }
        }
    })
}

function getBundle(transaction){
    iota.api.getBundle(transaction, function(error, data){
        if(error){
            console.log(error);
        }else{
            console.log(data);
            
        }
    })
}


function getAllTransfer(address){
    var searchObject = {
        'addresses' : [address]
    }

    iota.api.findTransactionObjects(searchObject, function(error, success){
        if(error){
            console.log(error);
        }else{
            console.log(success);
        }
    })
}
//dataRetrieval(address2)
//getBundle(`JJAHMJFVHXPI9SFYXPCZNWTOOFGGQAUKCMCCHJEELLQGJFWFPONCDEXC9UIRNAJQNFGYCMRUMCAZQG999`)
//getAllTransfer(address)
var st = util.formatMessage(`ABC9999ADAD99ADASDWK9WEW999999999A9999999999`)
console.log(st);





