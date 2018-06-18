const MSG = require('./msg')
const IOTA = require('iota.lib.js')
const iota = new IOTA({
    provider: 'http://localhost:14700'
})
const msg = new MSG();

function BUNDLE() {
    /**
     * Send Bundle from sender to receiver with data, depth, minWeightMagnitude.
     * 
     * @param {trytes-encode senderSeed} senderSeed 
     * @param {address} senderAddress 
     * @param {address} receiverAddress 
     * @param {Object} data 
     * @param {int} depth 
     * @param {int} minWeightMagnitude 
     */
    this.sendBundle = function (senderSeed, senderAddress, receiverAddress, data, depth, minWeightMagnitude, callback) {
        try {
            var messageInput = [];
            var messageOutput = [];
            var transfers = [];
            // create msg Object
            for (let i = 0; i < data.length; i++) {
                var msgInput = {
                    type: 'input',
                    preHash: data[i].preHash,
                }

                var msgOutput = {
                    type: 'output',
                    index: i,
                    product: data[i].product
                }
            }
            //create message
            for (let i = 0; i < data.length; i++) {
                msg.toMessage(msgInput, (error, data) => {
                    if (error) {
                        console.log(error);
                    } else {
                        messageInput[i] = iota.utils.toTrytes(data);
                    }
                })

                msg.toMessage(msgOutput, (error, data) => {
                    if (error) {
                        console.log(error);
                    } else {
                        messageOutput[i] = iota.utils.toTrytes(data);
                    }
                })
            }
            //push input to transfers
            for (let index = 0; index < data.length; index++) {
                transfers.push({
                    value: 0,
                    address: senderAddress,
                    message: messageInput[index]
                })
            }
            //push output to transfers
            for (let index = 0; index < data.length; index++) {
                transfers.push({
                    value: 0,
                    address: receiverAddress,
                    message: messageOutput[index]
                })
            }
            // send transfers
            iota.api.sendTransfer(senderSeed, depth, minWeightMagnitude, transfers, (error, success) => {
                if (error) {
                    return callback(error);
                } else {
                    return callback(null,success);
                }
            })
        } catch (err) {
            return callback(error);
        }

    }
}

module.exports = BUNDLE;