const IOTA = require('iota.lib.js')
const iota = new IOTA({
    provider: 'http://localhost:14700'
})

const hashs = ['NJFEDLWDXPWVCT9IMJGNOHZONSADVPCDXIWSATRQOCUCSRCS9HPMOSHIDECS9SGXXGRWUHKHD9UOOF999']

// console.log(iota.utils.fromTrytes('XCBDDDIDHDPDGCCCKBGCZBLBKBBCXBUBCBCBGCRBFCICWBBCPBXBBCOB9CQBGCHCHCSBSBICGCQBQBMBSBTBACLBUBWBHCICGCWBACDCQBICOBLBUBACGCYBICQBTBZBVBSBQBLBVBECLBLBXBWBOBZBKBXBLBQBPBBCYBECCBCBCBPDIDBDSCTCUCXCBDTCSCPDPDUA'))
    

// var M = new MSG();
// var msg = {
//     type: 'input',
//     // index: 1,
//     preHash: '',
//     // product: {
//     //     name: 'productB',
//     //     amount: 10    
//     //     // etc... 
//     // }
// }

// var messageA;

// M.toMessage(msg, (error, message) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(message);

//         M.fromMsg(message, (error, msg) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(msg);
//             }
//         })
//     }
// })

// iota.api.getNodeInfo((error, success) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(success);

//     } 
// })

// const seed ='HOYJZGMQAATTJYQKYJTUNCOZKFMUMLEEDXNGANVVJGASHJQKLRWFIKFCDAXVKZESSHKNCRSHZBRGGZLBF'
// const trytes =
//     'AAACTPLWDSSATIEHWUCFHRGAUOPGMGPZAWOTICKRGRAIXABENOEMNWUEWOCWQBYXAGVEOJBHOZBHBTNDE'
//     const trytes2 =
//     'BBBCTPLWDSSATIEHWUCFHRGAUOPGMGPZAWOTICKRGRAIXABENOEMNWUEWOCWQBYXAGVEOJBHOZBHBTNDE'
//     const trytes3 =
//     'CCCCTPLWDSSATIEHWUCFHRGAUOPGMGPZAWOTICKRGRAIXABENOEMNWUEWOCWQBYXAGVEOJBHOZBHBTNDE'    

// const message = iota.utils.toTrytes('Hello IceTea!5')

// const transfers = [
//     {
//         value: 0,
//         address: trytes,
//         message: message
//     },
//     {
//         value: 0,
//         address: trytes2,
//         message: message
//     },
//     {
//         value: 0,
//         address: trytes3,
//         message: message
//     }
// ]


// iota.api.sendTransfer( seed ,3, 9, transfers, (error, success) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(success)
//     }
// })

// const hashs = ['MUXIPLJEIQHKKTDPSYFQNJJKX9JTSIDHPPSARTNE9PJYGOJLMY9HXLRXVFT9FQGXBPQOWIBZWROWMS999']
// const hash = `MUXIPLJEIQHKKTDPSYFQNJJKX9JTSIDHPPSARTNE9PJYGOJLMY9HXLRXVFT9FQGXBPQOWIBZWROWMS999`
// const searchHash = {
//     hash: [`SZGDYBCEOXVNT`]
// }






// iota.api.getTips(function(error, success){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(success);

//     }
// })

// iota.api.findTransactions(searchHash, function(error, data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(`Done`);
//         console.log(data);
//     }
// })

// function findAccess(hash) {
//     iota.api.getBundle(hash, function (error, transactions) {
//         if (error) {
//             console.log(`end`);
//         } else {
//             let ownHash = transactions[0].hash
//             let trunkTransaction = transactions[0].trunkTransaction
//             console.log(ownHash)
//             findAccess(trunkTransaction)
//         }
//     })
// }

// function findOneAccess(hash) {
//     iota.api.getBundle(hash, function (error, transactions) {
//         if (error) {
//             console.log(`end`);
//         } else {
//             let ownHash = transactions[0].hash
//             let trunkTransaction = transactions[0].trunkTransaction
//             console.log(ownHash)
//         }
//     })
// }

// findAccess(hash)


// findOneAccess(`RLOQHXYQXVUQKGKDWGT9ERAQEEWXDPHJNHUIAZCRGGAETYMRWKVVLT9ZMFJPRZXYZVQSVXATXSEERQ999`)

// iota.api.getTransactionsObjects(hashs, function(error, transactions){
//     if(error){
//         console.log(error);
//     }else{
//         transactions.forEach(element => {
//             console.log(element.trunkTransaction);
//         });
//     }
// })


// iota.api.getTransactionsObjects(hashs, function(error, transactions){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(transactions[0].signatureMessageFragment);

//     }
// })

// iota.api.getAccountData(trytes, function(error, success){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(success);
//     }
// })


// iota.api.getBundle(hash, (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         msg.fromMsg(toMessage(data.signatureMessageFragment), (error, msg) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(msg);
//             }
//         })
//     }
// })
