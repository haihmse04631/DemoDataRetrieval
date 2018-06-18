const IOTA = require('iota.lib.js')
const UTIL = require('./common_util/utility.js')
const util = new UTIL()
const iota = new IOTA({ provider: 'http://localhost:14700' })


// iota.api.getNodeInfo(function(error, success) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(success);
//     }
// })
var seed = `VERTAWNTFULJCUNRZXPVBHQKBTSOOPPPNRBQ9AUYDRDFPVIJBIOBLNLNS9GGVUHXIJCHTCVOQQGVRY9IH`
var st = `VERTAWNTFULJCUNRZXPVBHQKBTSOOPPPNRBQ9AUYDRDFPVIJBIOBLNLNS9GGVUHXIJCHTCVOQQGVRY9IH`
var accountData = util.getAccountData(seed)
console.log(accountData);
