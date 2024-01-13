//모듈여러개 내보내기

let a = 1;
let b = 2;

function add(c, d){
    return c + d;
}

/*exports.가져오기에서 사용할 이름 = 내보내기 할 객체;*/

exports.a = a;
exports.b = b;
exports.add = add;