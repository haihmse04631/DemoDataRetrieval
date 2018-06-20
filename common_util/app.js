// Require the use of IOTA library
const IOTA = require("iota.lib.js")
// Create a new instance of the IOTA class object. 
// Use 'provider' variable to specify which Full Node to talk to
const iota = new IOTA({
    provider: "http://localhost:14700"
})


const hash = 'NJFEDLWDXPWVCT9IMJGNOHZONSADVPCDXIWSATRQOCUCSRCS9HPMOSHIDECS9SGXXGRWUHKHD9UOOF999'

function toMessage(trytes) {
    temp = trytes.split("").reverse();
    var indexEnd = 0;
    for (let index = 0; index < temp.length; index++) {
        if (temp[index] != '9') {
            indexEnd = index;
            break;
        }
    }

    return iota.utils.fromTrytes(trytes.toString().substring(0, trytes.length - indexEnd));
}


function getHistory(hash, callback) {
    let history = [hash];
    let hashed = [hash];
    iota.api.getTransactionsObjects(hashed, (error, txn) => {
        if (error) {
            console.log(error);
        } else {
            let msg = JSON.parse(toMessage(txn[0].signatureMessageFragment));
            switch (msg.type) {
                case "input":
                    if (msg.preHash === "") {
                        return callback(null, history);
                    } else {
                        history.unshift(msg.preHash);
                        getHistory(msg.preHash);
                    }
                    break;
                case "output":
                    getHistory(iota.api.getBundle(txn[0], (error, bundle) => {
                        if (error) {
                            return callback(error);
                        } else {
                            getHistory(bundle[msg.index].hash);
                        }
                    }))
                    break;
                default:
                    return callback(new Error("Type Error!"));
            }
        }
    })
}


getHistory(hash, (error, history) => {
    if (error) {
        console.log(error);
    } else {
        history.forEach(element => {
            console.log(element);
            console.log("\n");
            console.log("-------------------------------------------");
        });
    }
})