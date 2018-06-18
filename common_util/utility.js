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
    var index = message.length - 1;
    var isFirstIndexOf9 = true;
    for (let i = 0; i < message.length; i++) {
        if (message[i] == '9') {
            if (isFirstIndexOf9) {
                index = i
                isFirstIndexOf9 = false
            }
        } else {
            index = message.length - 1
            isFirstIndexOf9 = true
        }
    }
    let stMessage = message.substring(0, index)
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
    var index = message.length;
    var isFirstIndexOf9 = true;
    for (let i = 0; i < message.length; i++) {
        if (message[i] == '9') {
            if (isFirstIndexOf9) {
                index = i
                isFirstIndexOf9 = false
            }
        } else {
            index = message.length
            isFirstIndexOf9 = true
        }
    }
    let stMessage = message.substring(0, index)
    return iota.utils.fromTrytes(stMessage)
}




module.exports = utility

