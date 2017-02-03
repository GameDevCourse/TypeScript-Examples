// let module = (function () {
//     var a = 1;
// })();

namespace aaa {

    var a = 1;
    export var b = a + 1;
}

namespace aaa {

    var a = 1;
    export var b = 222;
}

// function require() {
//     var module = {};
//     (function (require, exports) {
//         var a = 1;
//         exports.b = a + 1;
//     })(require, module);
//     return module;
// }


export var a = 1;