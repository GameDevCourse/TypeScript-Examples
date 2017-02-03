// let module = (function () {
//     var a = 1;
// })();
define(["require", "exports"], function (require, exports) {
    "use strict";
    var aaa;
    (function (aaa) {
        var a = 1;
        aaa.b = a + 1;
    })(aaa || (aaa = {}));
    (function (aaa) {
        var a = 1;
        aaa.b = 222;
    })(aaa || (aaa = {}));
    // function require() {
    //     var module = {};
    //     (function (require, exports) {
    //         var a = 1;
    //         exports.b = a + 1;
    //     })(require, module);
    //     return module;
    // }
    exports.a = 1;
});
