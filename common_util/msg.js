
const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'http://localhost:14700' })

function MSG(){
/**
 * 
 * @param {Object} msg
 *      @property {String} type  type of transaction whose this msg
 *      @property {int} index    only use with OutPut Transaction, index of InPut Transaction
 *      @property {String} preHash only use with InPut Transaction, hash of Transaction is root of product
 *      @property {Object} product 
 *          @property {String} name name of product
 *          @property {int} amount number product in transaction
 *          etc ...
 * @returns {string} message
 */
 this.toMessage = function (msg, callback){
     let type;
     let preHash;
     let index;
     let product = {
        name: '',
        amount: 0
     }
     let message='';
    // validate msg
    if ('type' in msg) {
        type = msg.type;
        if (type === 'input') {
            if ('preHash' in msg) {
                preHash = msg.preHash;
                iota.valid.isHash(preHash);                
            } else {
                return callback(new Error("Invalid Prehash provided"))
            }
        } else if (type === 'output') {
            if ('index' in msg) {
                index = msg.index;
                iota.valid.isValue(index);
                if ('product' in msg) {
                    product = msg.product;                                                                            
                    if ('name' in product) {
                        name = product.name;
                        if ('amount' in product) {
                            amount = product.amount;
                        } else {
                            return callback(new Error("Invalid Amount provided"))
                        }
                    } else {
                        return callback(new Error("Invalid Name provided"))
                    }
                } else {
                    return callback(new Error("Invalid Product provided"))
                }
            } else {
                return callback(new Error("Invalid Index provided"))
            }
        } else{
            return callback(new Error("Invalid Type provided"))
        }    
    } else {
        return callback(new Error("Type is not null"))
    }

    message = type + '|' + preHash + '|' + index + '|' + product.name + '|' + product.amount;
    return callback(null, message);
 } 
    

/**
 * 
 * @param {String} message 
 * @returns {Object} Object msg
 */
this.fromMsg = function (message, callback) {
    try {
        let arr = message.split('|');             
        let msg = {
             type: arr[0],
            index: arr[2],
            preHash: arr[1],
            product:{
                name: arr[3],
                amount: arr[4]
            } 
        }
    return callback(null,msg);
    } catch (error) {
        return callback(error)
    }
    
}

// TEST FUNCTION

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

// toMessage(msg, (error, message)=>{
//     if (error) {
//         console.log(error);            
//     } else {
//         console.log(message);
        
//         fromMsg(message, (error,msg)=>{
//             if (error) {
//                 console.log(error);            
//             } else {        
//                     console.log(msg);                                                            
//             }
//         })   
//     }
// })

}

module.exports = MSG;
