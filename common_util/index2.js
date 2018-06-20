const BUNDLE = require('./bundle')
const bundle = new BUNDLE();

const seedA = 'UVJUSYDS9TXRHBUDUOYOYDKOUNJWAVQERKGNHXGUQVTKHQYQKINDKCVEFZHURTSIYBLESAICFLOJ9FNGX';
const seedB = 'CQVWVNJQNCIVVMORDEQYOZBMSFNJFVPGDMSCCCQIKJHIBULBSKQA9KXPKXZFATIEPJ9SRJKKNAEAAILMT';
const seedC = 'OUAJP9XAPLEEHERFGWECJTDWEWTVEHBIWWAJXMDRSZIPMFVCSWHOOOOAVYBIYRRKOFUNDAKMTLFYFVEHO';
const seedD = 'QDHLMDFTWTZESPSOVPNDZD9BTUXZTLPMJRLYNLQBIAAVOKRIXGMFLDBEYWENMHOFJIQQGJKPIA9YESVT9';
const seedE = 'AJFTCFWXHMETOKCFLYYQGRI9LIUNEHDAAHZZRL9RMNRWWSATTAFDSLQMEKIKCFRTR9ZCXHTPIFRZMSPUB';
const seedF = '9CAIYGNMI9B9HTDWPAJQIU9XNAO9GSSSIIBESJLSGSNTPBAJADP9KALSOIBWAZMYX9ZZKZEELUZDWQQFK';
const seedG = 'SVGSBKCVKYTMUYVARZRKYZY9LSQAYJMQ9HGSXCJWUDTETHCPSQKF9CAOMNFHVENVSCAMNSFID9QZAKVPQ';
const seedH = 'LTHTGFCAUHEOZRNKPRJHCMIXOFFEKIBCXDHGDSZEJCAPBWMDTCUKSOFMQX9FYHCGDGLUAPTBXPEWCHADG';

var walletA = [
    'RWSFROOGHEWVENTVKPUXC9PACAOKYKNWO9HDLMXKTDRWMADJIVVYUQZRXWUQDLQYEUZXYBVOFNHGRERGAMPLLQOCZD',
    'AAZJEI9VUMIRPQSGYSCZSEKANBI9RMOVCCNUPRIBAUOYUYMQAGMXSBPT9CFKGWIJQLJSUPOSEBGPKEAN9WICBPKSIW',
    'MJGUPQJBSCM9TIWIUCOTA9RRDBBTSGZMSC9TJ9JYVJUQ9CUTPQJLFJYR9GZFDDNQGLYSAEJZPNBG9GW9CMWQJAR9GY',
    'WDN9K9LNIVCLNZVQNTSWFOLOVWNLTLAS9SBYRHWEDGDJEOL9NSPZSXHWHGHV9EXYGCWJUPSWWH9XIAZTBSCMWXQZZC',
    'ANJGGSWABLQQN99YQCTJNXPTFXFZNQRKODSCUSGJYXELFMPWWMB9WW9IQTSFLPVNDXVSVRZMQUCRIZUAWBEWK9A9ZD'
]
var walletB = [
    'OWPKSTWKDBWWOGUN9NCLVPFONBLLBNLOJXQEBYMZYMFCOZCRMQXPGIKETQLSBFGHGWXZOCBEZWSKSABW9TXGMOHQAA',
    'RYBJQGGCFSBV9KAJOSBMHNHZSISGWAEYIMCQZPKMRINRIKBCH9PJDRIEOHLEHPQJCQIJFYDLTZFHBLVLWWNYGGFNFC',
    'GHKBWCEVMTVLSBBZASKQKFXSTSQRGXIGKGARDVYFUNICUCWIICD9SAODUIMNCCBOCHPPNTMLZUSTN9NXWUEVNWD9PX',
    'WP9XWASDUJODYBPLZJDUEGTSFHX9MBMKA9TGYMRSWDVOJLVIXZPGQUYBYLJ9NNOVAAHZHDRO9DFFHHBXWABCVMERKY',
    'DL9LKHFUIMJFQJYVATRUZTBGVMFLFGKNRWECKKSRM9PVSWQCQGSMSERZPVURRLBLTKCFXYRTKFMGXSATYTZOEWCQLC'
]
var walletC = [
    'R9EJTARCMMIJECFHIYLRQYQCCWWZKLFAVNFAWDJMUJSHKHNUPGLGXUXANTIHKDHQNYACPELJ9QCDRDYA9NTPFMGFTW',
    'JKZRKVHDKMLKIUNX9ODHXP9KUKTPLOKHBKPBMZDYR9JDVAPOVIJOLUSJKZKQQOVUEXILMRPY9MLVBYYJWWDRRUFZ99',
    '9EGGVEVGWREZFMYKUZHVXHCDPLZTCBEIBHJTNMCRNCRYNCCOH9VWDQMCRWGSPAMKLOEICXUOXCEVUEPPAZCFXYQLDW',
    'DWMIZLSMEGAQHWTPXGZLYUKFSXWCJLSEOYWYNNTLUNMDZZZVWOPFGGIQAXKIGG9QMTTJPVGEKKTSLNGQ9SAVIGNLUZ',
    'BXWAXAVSZCCVXXVGZHSVFWPINVWCWSBXAVLWMWIFDK99EGXDM9MTLTJMAFWZXWCUFDJWEELECWULUGWIXFRKXVLKYD'
]
var walletD = [
    'NWEAICNPPKYTA9SDHFBTQDZPPG9UQKVRGAH9TXKZEPPOFGEWRFRBIKIJEEAYMEHJFCFMAFP9OBWQVSR99WOKAWNKPX',
    'HWDS9XLWZWOTEWMWDYK9AUVFLTVIJKATQBKZMSVDQTOAUSFYZTQLUFZYCJOQAHKWHXNQJGLEYYWXDBCAAZGBANDUK9',
    'WDBOKZMJAGRRVGXMVSQCKXUIOCIMCWATVX9ITUKONYYDQIASBFTVOZBPUZIHECBTEVCRKYKR9QDPDSTFCELUJMNWBA',
    'BFXULLMRZGQ9FOZJZUITXAIZQFEVICVSCNKSMMVHBZZDODZUHAMTVFFRBGFTUHJDVAOQZTCFLMMHVXYLCA9DTWPAJB',
    'SVMUEWDXS9ITVSVOXSVWRVGMZTFXPCITYWXHK9LMZGKTAZLZICDCSEBIUDIGH9DHVZFGIHVYGZEOJVVJAVSTDKUADZ'
]
var walletE = [
    'YRKCXKALOFLAZIJXBPNNBL9CNDMEPGXQVYXZIWOZGOWSVRTSBWBGXE9VVRPFSFUYQVKLGAD9JTTHJYADDMCQCUNBUC',
    'JIUUXEESEECIKWTJNNXA9SZYGTCCTJOUEOU9THSOOQAYUQYKZXWQDYHSD9IRFAEDLLEIBRQDAPCDNJBEAIXVSCSTW9',
    'LUXPAQUBWDQGOWZ9CQFLANWNCRQHUQLOGPTGMNZCJWSXFZUVUQZZRXVWXXHLALTQMQZTMPFRMWGK9DTQBOJPRQUSSX',
    'YFZLBYQCPIW9YOEDRMZOPJOBDEOCFIHMDJWSQTJPRRVUOBDOTWIWFDHLJDP9TKBQAOQFLPLPZGEMRPDQZHLIRIHRLZ',
    'G9JBELCPKRUXEIOAWIVDYNIJBKNBPDBCBRHQC9RCOJPFXXEUMHICHACCZPUASIPEDTOE9YBRMCCNDGQJZLPNVBRMCX'
]
var walletF = [
    'EMTVYSTXNTQGFCZHQYKWRJMUPUFJGVMUZAPWZGJKLTIRDISYQOHQKYSMIYWJASAQUURQHUDDCWORMQKZBVM9S9GTWZ',
    'CQHVIEHVOZSUKXMYQMDKMACRR9WWAZQOCGLGDPQKCNHN9USEJCIYTATWBKUHQRPNFJVXYLDLAQAFMW9PWHDAOXFTVY',
    'QUGJIXGCMIRHC9YJREBO9UD9Q9XQKRZYOFJJHDGCSTJGJUCTJQGYUP9RTJIGXPAMHMHY9FZTKILMC99RYWTOLQIOQA',
    'LGSUTQRRFSQMQP9VFMTRHDWTSNLYMHNMOUJAUXVUMMBZKBFEAAOYGQGSAPBNWXJJGTCMVVBQ9H9Z9SHEW9MDTHWCC9',
    'NLWX9SJHXDYLTGAZQDVNLIUXTRLRAR9UON9UJWSHTMONCPC9PVKXPRJNLRONMYCUZHFPYRIP9SSYLPCZDLDWLMAGNY'
]
var walletG = [
    'UGSJPPEPEJWBVBBAGBLYIRJKCGKUHTFASLRLY9HZGDCIZDIXRLINKGDJSOSDQXMYAQSL9HBIWZLXKDKQCYEMAOGHNW',
    'SMYYDSLQZMPPLDKHUWENFWZTRDYTRYKJKVHISQTKYKSDLDWBUQXV99KAYHUQRM9OEEKVKPHGWAIQYGYZAWIADOKRAW',
    'JI9YKBOBPODTVWNQNVPNMXWPVHXLIHZHXITDOTSTMMRFIWYTVOCPUMMDIWTYRITNAUGUV9LSFJHLTNOVWRYJOONOSD',
    'FPAHMVOZYRDOBGIPGVIGMFMCESJIHDUFVNLASUBV9WMLZOFACNVYOHHLYKTPBRGRQR9M9HMITWWXYSWEBHZ9FOJAHC',
    'RAHQFMBODMWPOXGCMODCCQFUPPABACDORWLHVWVS9T9YBIBKZUROYFVDBLXCJKI9CWDBVMEIQKZ9QSLICQ9EXEDVJC'
]
var walletH = [
    'GSTUSEXNEEOPLVIQGUVAV9RKNSGVVOSXBDBZYWOCDEXTLFNZYZGYKPIXVFAGZAFKIVTZAFDBCOZHYQHYACPXMGMMJ9',
    'SOHWIRKGPFXCHIMROOGW9M9DZOJQQAKMYDFUNBM9OWBESPWMVBOVQKULXTZURAILSAMT9MEYR9WAWDTDCE99QLRIKW',
    'MBHUGBIOMKHXMELPNJBJASZGSYWYTQCIRBVZARAVGANCGJG9OZ9BQSXDCNULMVMFYXZSJQHDLMTPMZXGCQOOLWZERD',
    'SYXSTAMQRGPKOSGOZIWZWKEPQLZXYRDDHWCTMJHJLFZZRIMIZXIXIWNORVTFEVSYBMX9KJ9RVJWDXAWJAK9WDIKME9',
    'OFTZII9OFA9LKJMFYLKYDRKRJMOJLYTPXLMSEKDTCMDKYJXTLBZOAJKTDZOWSAOMMEFRKHFPUNIGNEYZYRTZBAYOV9'
]

var data;

// BUNDLE 1: A=>D:    Rau: 20
//                    Cu: 20

data = [
    {
        "preHash": "",
        "value":0,
        "tag":"level1",
        "product": {
            "name": "Rau",
            "amount": 20
        }
    },   
    {
        "preHash": "",
        "value":0,
        "tag":"level1",
        "product": {
            "name": "Cu",
            "amount": 20
        }
    }
]

// bundle.sendBundle(seedA,walletA[0],walletD[0],data,3,9,(error,success)=>{
//     if (error) {
//         console.log(error);        
//     } else {
//         console.log(success);        
//     }
// });

//------------------------------------------------------------------------------
//BUNDLE 2  B=>D:   Rau: 30
//                  Cu: 30 

data = [
    {
        "preHash": "",
        "value":0,
        "tag":"level1",
        "product": {
            "name": "Rau",
            "amount": 30
        }
    },   
    {
        "preHash": "",
        "value":0,
        "tag":"level1",
        "product": {
            "name": "Cu",
            "amount": 30
        }
    }
]

// bundle.sendBundle(seedB,walletB[0],walletD[0],data,3,9,(error,success)=>{
//     if (error) {
//         console.log(error);        
//     } else {
//         console.log(success);        
//     }
// });

// --------------------------------------------------------------------------
// BUNDLE 3: C=>E:   Rau: 30
//                   Cu: 30

data = [
    {
        "preHash": "",
        "value":0,
        "tag":"level1",
        "product": {
            "name": "Rau",
            "amount": 30
        }
    },   
    {
        "preHash": "",
        "value":0,
        "tag":"level1",
        "product": {
            "name": "Cu",
            "amount": 30
        }
    }
]

// bundle.sendBundle(seedC,walletC[0],walletE[0],data,3,9,(error,success)=>{
//     if (error) {
//         console.log(error);        
//     } else {
//         console.log(success);        
//     }
// });

// --------------------------------------------------------------------------
// BUNDLE 4. D=>E:   D=>E:     Rau(A1): 20
//                             Rau(B1): 10
//                             Cu(B2): 30        

data = [
    {
        "preHash": "CFIPJQRUGZZCVVSJSO9YDCJSCUMSGEZDCOCNRMXIAAMHWEEKJIWQIFRBMQLPPJKWLWOXTYK9EJTTFK999",
        "product": {
            "name": "Rau",
            "amount": 20
        }
    },
    {
        "preHash": "LPKRQLBKXYBLGPSNGFUVCHUOVXQXJNFLWESVAVRSNALKTJOVROSRFZKYUCMOVNEVFIHELVWFLGZBLT999",
        "product": {
            "name": "Rau",
            "amount": 10
        }
    },
    {
        "preHash": "OSHBCDKWFMAFXIJLIVNHRLWEBHQLUPCTZETMBAUATJVEUWXZJK9PCEQ9HSMYPSJB9ZOCFNSRQHOAYA999",
        "product": {
            "name": "Cu",
            "amount": 30
        }
    }
]

// bundle.sendBundle(seedD,walletD[0],walletE[0],data,3,9,(error,success)=>{
//     if (error) {
//         console.log(error);        
//     } else {
//         console.log(success);        
//     }
// });

// --------------------------------------------------------------------------
// BUNDLE 5. E=>F:    Rau: 40 : D4:15 C3:25

data = [
    {
        "preHash": "BAVGWOCS9SWCWEXZAXCSJYAXXQN9SDGORSPKXPDKFUSDIOAPV9IRZXWSWGTENSGFSAVSCKYFCWNLT9999",
        "product": {
            "name": "Rau",
            "amount": 15
        }
    },   
    {
        "preHash": "PMCRTNDSXTQINFEOCZDWDSGNBINEQRCWJGVCTISSWVBCYMVQSIRMOGGNGKVCKLHBHHNTVLPJYLBFIW999",
        "product": {
            "name": "Rau",
            "amount": 25
        }
    }
]

// bundle.sendBundle(seedE,walletE[0],walletF[0],data,3,9,(error,success)=>{
//     if (error) {
//         console.log(error);        
//     } else {
//         console.log(success);        
//     }
// });

// --------------------------------------------------------------------------
// BUNDLE 6. E=>G:   Rau: 10 : D4:5 D5:5
//                   Cu: 30  : C4:20 D6:10 
data = [
    {
        "preHash": "BAVGWOCS9SWCWEXZAXCSJYAXXQN9SDGORSPKXPDKFUSDIOAPV9IRZXWSWGTENSGFSAVSCKYFCWNLT9999",
        "product": {
            "name": "Rau",
            "amount": 5
        }
    },   
    {
        "preHash": "MQYAIQTSHTHEGRTYYA9YIYBFEKITERPEQJOIUJWUQMGGXOTARGKXNZQUNQHT9TJLEZWPSNVH9GPZEA999",
        "product": {
            "name": "Rau",
            "amount": 5
        }
    },
    {
        "preHash": "YTOKMISKV9VOP9SE9HVCFUQTDHCIBTBQMTZUM9VFBVGRSYEFOJHYBMWMT9HTWEIZLXRNTNNZPATUDN999",
        "product": {
            "name": "Cu",
            "amount": 20
        }
    },   
    {
        "preHash": "AUSEYKIVVPCLJJLTRRQHDSKFNJXHRN9NOWNNBMLNCGCZPKKRVXYULROLQJIZBXBKCEBWEXIZJBTVBO999",
        "product": {
            "name": "Cu",
            "amount": 10
        }
    }
]

bundle.sendBundle(seedE,walletE[0],walletG[0],data,3,9,(error,success)=>{
    if (error) {
        console.log(error);        
    } else {
        console.log(success);        
    }
});
// --------------------------------------------------------------------------
// BUNDLE 7. E=>H:    Rau: 10 : D1:5 D2:5

// --------------------------------------------------------------------------
// BUNDLE 8. F=>G:    Rau(B5.E1): 10 
data = [       
    {
        "preHash": "WGDUUWPRUHQTTTIWRVRTG9AZZ9XCUHNPROHQPKENLBQKHKXSDDGNTTC9XLLGLWMWPAKPFOFNMDBCLR999",
        "product": {
            "name": "Rau",
            "amount": 10
        }
    }
]

// bundle.sendBundle(seedF,walletF[0],walletG[0],data,3,9,(error,success)=>{
//     if (error) {
//         console.log(error);        
//     } else {
//         console.log(success);        
//     }
// });

// --------------------------------------------------------------------------
// BUNDLE 9. D=>G:    Rau(B1): 10

data = [       
    {
        "preHash": "YWYOTEYFBQMIPTRQSWIFAHBXATDEFOORQVECTXGHLUYXAOBRKXPSZODWOJPZK9IORXJCT9ZQBM9PBZ999",
        "product": {
            "name": "Rau",
            "amount": 10
        }
    }
]

// bundle.sendBundle(seedD,walletD[0],walletG[0],data,3,9,(error,success)=>{
//     if (error) {
//         console.log(error);        
//     } else {
//         console.log(success);        
//     }
// });

// --------------------------------------------------------------------------
// BUNDLE 10. D=>H:   Cu(A2): 20    

data = [       
    {
        "preHash": "MNNGGSKTFXHLOCGTWSFUXDYRRORSMRNOUEFITQZCYXCAEXMBQSIVFKBEMYZGUTBEAOWAXLYDBQOOCY999",
        "product": {
            "name": "Cu",
            "amount": 20
        }
    }
]

// bundle.sendBundle(seedD,walletD[0],walletH[0],data,3,9,(error,success)=>{
//     if (error) {
//         console.log(error);        
//     } else {
//         console.log(success);        
//     }
// });
