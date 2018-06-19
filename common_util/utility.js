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




module.exports = utility

