const IOTA = require('iota.lib.js')
const iota = new IOTA({
    provider: 'http://localhost:14700'
})


function BUNDLE() {
    /**
     * Send Bundle from sender to receiver with data, depth, minWeightMagnitude.
     * 
     * @param {trytes-encode senderSeed} senderSeed 
     * @param {address} senderAddress 
     * @param {address} receiverAddress 
     * @param {JSON} data 
     * @param {int} depth 
     * @param {int} minWeightMagnitude 
     */
    this.sendBundle = function (senderSeed, senderAddress, receiverAddress, data, depth, minWeightMagnitude, callback) {
        try {
            var messageInput = [];
            var messageOutput = [];
            var transfers = [];
            var msgInput = [];
            var msgOutput = [];
            // create msg Object
            for (let i = 0; i < data.length; i++) {
                msgInput.push({
                    "type": "input",                    
                    "preHash": data[i].preHash,
                })

                msgOutput.push({
                    "type": "output",
                    "index": i,                    
                    "product": data[i].product
                })
            }

            //create message
            for (let i = 0; i < data.length; i++) {
                messageInput[i] = iota.utils.toTrytes(JSON.stringify(msgInput[i]));
                messageOutput[i] = iota.utils.toTrytes(JSON.stringify(msgOutput[i]));
            }

            //push input to transfers
            for (let index = 0; index < data.length; index++) {
                transfers.push({
                    value: 0,
                    tag: iota.utils.toTrytes(data[index].tag),
                    address: senderAddress,
                    message: messageInput[index]
                })
            }
            //push output to transfers
            for (let index = 0; index < data.length; index++) {
                transfers.push({
                    value: 0,
                    tag: iota.utils.toTrytes(data[index].tag),
                    address: receiverAddress,
                    message: messageOutput[index]
                })
            }
            // send transfers
            iota.api.sendTransfer(senderSeed, depth, minWeightMagnitude, transfers, (error, success) => {
                if (error) {
                    return callback(error);
                } else {
                    return callback(null, success);
                }
            })
        } catch (err) {
            return callback(err);
        }

    }

}

module.exports = BUNDLE;