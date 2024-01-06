// 모듈 1개 내보내기 module.exports
// module.exports에 객체로 담아 내보내기

function isOdd(val){
    return (val%2)? true:false
}

module.exports = { isOdd }

/*
다른 내보내기 방법 
exports.isOdd = function(val){
    return (val%2)? true:false
}
*/