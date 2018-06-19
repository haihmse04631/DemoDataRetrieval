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
    for (let i = message.length - 1; i >=0 ; i--) {
        if(message[i] != '9'){
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
    for (let i = message.length - 1; i >=0 ; i--) {
        if(message[i] != '9'){
            var stMessage = message.substring(0, i + 1);
            break; 
        }
    }
    return iota.utils.fromTrytes(stMessage)
}

/**
 * 
 * @param {String} address 
 * @returns String message of each transaction
 */
utility.prototype.getAllMessageFromAddress = function(address){

    var searchObject = {
        'addresses' : [address]
    }

    iota.api.findTransactionObjects(searchObject, function(error, transactions){
        if(error){
            console.log(error);
        }else{
            transactions.forEach(element => {
                var signatureMess = element.signatureMessageFragment;
                for (let i = signatureMess.length - 1; i >=0 ; i--) {
                    if(signatureMess[i] != '9'){
                        var stMessage = signatureMess.substring(0, i + 1);
                        break; 
                    }
                }
                console.log(iota.utils.fromTrytes(stMessage) + ` - value ${element.value}`);
            });
        }
    })
}


module.exports = utility

