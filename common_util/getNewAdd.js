// Require the use of IOTA library
const IOTA = require("iota.lib.js")

// Create a new instance of the IOTA class object. 
// Use 'provider' variable to specify which Full Node to talk to
const iota = new IOTA({
    provider: "http://localhost:14700"
})

const seedA = 'UVJUSYDS9TXRHBUDUOYOYDKOUNJWAVQERKGNHXGUQVTKHQYQKINDKCVEFZHURTSIYBLESAICFLOJ9FNGX';
const seedB = 'CQVWVNJQNCIVVMORDEQYOZBMSFNJFVPGDMSCCCQIKJHIBULBSKQA9KXPKXZFATIEPJ9SRJKKNAEAAILMT';
const seedC = 'OUAJP9XAPLEEHERFGWECJTDWEWTVEHBIWWAJXMDRSZIPMFVCSWHOOOOAVYBIYRRKOFUNDAKMTLFYFVEHO';
const seedD = 'QDHLMDFTWTZESPSOVPNDZD9BTUXZTLPMJRLYNLQBIAAVOKRIXGMFLDBEYWENMHOFJIQQGJKPIA9YESVT9';
const seedE = 'AJFTCFWXHMETOKCFLYYQGRI9LIUNEHDAAHZZRL9RMNRWWSATTAFDSLQMEKIKCFRTR9ZCXHTPIFRZMSPUB';
const seedF = '9CAIYGNMI9B9HTDWPAJQIU9XNAO9GSSSIIBESJLSGSNTPBAJADP9KALSOIBWAZMYX9ZZKZEELUZDWQQFK';
const seedG = 'SVGSBKCVKYTMUYVARZRKYZY9LSQAYJMQ9HGSXCJWUDTETHCPSQKF9CAOMNFHVENVSCAMNSFID9QZAKVPQ';
const seedH = 'LTHTGFCAUHEOZRNKPRJHCMIXOFFEKIBCXDHGDSZEJCAPBWMDTCUKSOFMQX9FYHCGDGLUAPTBXPEWCHADG';

var option = {
    index: 1,
    checksum: true,
    total: 5,
    security: 1,
    returnAll: true
}

iota.api.getNewAddress(seedG, option, (error,data)=>{
    if (error) {
        console.log(error);        
    } else {
        console.log(data);        
    }
})
