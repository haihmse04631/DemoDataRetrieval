const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'http://localhost:14700' })

iota.api.getNodeInfo(function(error, success) {
    if (error) {
        console.error(error);
    } else {
        console.log(success);
    }
});
