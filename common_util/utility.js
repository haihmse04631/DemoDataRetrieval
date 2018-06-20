const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'http://localhost:14700' })

function utility() {

}

/**
 * cut '99999' from signatureMessageFragment 
 * 
 * @method formatMessage
 * @param {String} message
 * @returns {String} new string message
 */

utility.prototype.formatMessage = function (message) {
    for (let i = message.length - 1; i >= 0; i--) {
        if (message[i] != '9') {
            var stMessage = message.substring(0, i + 1);
            break;
        }
    }
    return stMessage
}


/**
 * cut '99999' from signatureMessageFragment and decode 
 * 
 * @method formatMessage
 * @param {String} message
 * @returns {String} new string message
 */
utility.prototype.formatAndDecodeMessage = function (message) {
    for (let i = message.length - 1; i >= 0; i--) {
        if (message[i] != '9') {
            var stMessage = message.substring(0, i + 1);
            break;
        }
    }
    return iota.utils.fromTrytes(stMessage)
}


/**
 * 
 * @param {String} address 
 * @callback {} a list of decode message
 * @returns promise contain list message
 */
utility.prototype.getAllMessageFromAddress = function (address) {
    var promise = new Promise(function (resolve, reject) {
        var searchObject = {
            'addresses': [address]
        }

        var listMessFromAddress = []

        iota.api.findTransactionObjects(searchObject, function (error, transactions) {
            if (error) {
                reject(Error(error))
            } else {
                transactions.forEach(element => {
                    var signatureMess = element.signatureMessageFragment;
                    for (let i = signatureMess.length - 1; i >= 0; i--) {
                        if (signatureMess[i] != '9') {
                            var stMessage = signatureMess.substring(0, i + 1);
                            break;
                        }
                    }
                    if (typeof (stMessage) != 'undefined') {
                        listMessFromAddress.push(iota.utils.fromTrytes(stMessage))
                    }
                });
                resolve(listMessFromAddress)
            }
        })
    })

    return promise
}


/**
 * input a preHass and return a list message in transaction contain this prehash 
 * @param {String} hash 
 * @returns promise
 */
utility.prototype.getPreHashInfor = (hash) => {
    var util = new utility()
    var promise = new Promise(function (resolve, reject) {
        var hashs = [hash]
        var listMess = []
        iota.api.getTransactionsObjects(hashs, function (error, datas) {
            if (error) {
                reject(Error(error))
            } else {
                datas.forEach(element => {
                    listMess.push(util.formatAndDecodeMessage(element.signatureMessageFragment))
                });
                resolve(listMess)
            }
        })
    })
    return promise
}


/**
 * input a JSON String and display product infor in this JSON String
 * @param {JSON} JSONString 
 * @returns Void - display a String
 */
utility.prototype.decodeInforFromJSON = (JSONString) => {
    var util = new utility()
    var product = {
        name: "empty",
        amount: "empty"
    }
    let msg = JSON.parse(JSONString)
    switch (msg.type) {
        case 'input':
            var tempSt = " Status: Input - Product Infor: "
            if (iota.valid.isHash(msg.preHash)) {
                var promise = util.getPreHashInfor(msg.preHash)
                promise.then(function (result) {
                    if (result.length == 1) {
                        var tempObj = JSON.parse(result[0])
                        product = tempObj.product
                        tempSt += `Name ${product.name}, Amount ${product.amount}`
                        console.log(tempSt);
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            } else {
                console.log(`error!!!!`);
            }
            break;
        case 'output':
            product = msg.product
            var tempSt = ` Status: Output - Product Infor: Name ${product.name}, Amount ${product.amount}`
            console.log(tempSt);
    }
}


/**
 * input a String address and display all product infor that perform tranfers with this address
 * @param {String} address 
 * @returns List products infor
 */
utility.prototype.getAllInforFromAddress = (address) => {
    var util = new utility()
    var promise = util.getAllMessageFromAddress(address)
    promise.then(function (result) {
        result.forEach(element => {
            util.decodeInforFromJSON(element)
        })
    }).catch(function (error) {
        console.log(error);
    })
}

/**
 * 
 * @param {String} address 
 */
utility.prototype.getAllInforFromAddress2 = (address) => {
    var util = new utility()
    var promise = util.getAllMessageFromAddress(address)
    promise.then(function (result) {
        result.forEach(element => {
            console.log(element);
        })
    }).catch(function (error) {
        console.log(error);
    })
}


module.exports = utility

