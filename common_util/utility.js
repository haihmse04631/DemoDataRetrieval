const IOTA = require('iota.lib.js')
const iota = new IOTA({ provider: 'http://localhost:14700' })

function utility(){

}

utility.prototype.getInforTransaction = function(tail){
    iota.api.getBundle(tail, function(error, data){
        if(error){
            console.log(error);
        }else{
            console.log(data);
        }
    })
}

utility.prototype.getAccountData = function(seed){
    iota.api.getAccountData(seed, function(error, data){
        if(error){
            console.log(error);
        }else{
            return data
        }
    })
}

utility.prototype.toMessage = function(){
    
}

module.exports = utility

