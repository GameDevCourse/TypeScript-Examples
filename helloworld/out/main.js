console.log('hello,world');
$.ajax({ url: 'www.baidu.com', success: function (data) {
        console.log(data);
    } });
function createUser() {
    var userName = "wander";
    var age = 28;
    return { userName: userName, age: age };
}
var _a = createUser(), userName = _a.userName, age = _a.age;
console.log(userName, age);
var array = ['hello', 'world'];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log(value);
}
var cc;
// let message;
// message = 'hello,world';
// let message = 'hello,world'; // message 推断为 string 类型
// message = 'hello,typescript'; // 'hello,typescript'类型是 string 类型的子类，编译通过
// const message_1 = 'hello,world'; // 由于使用了 const 关键字，类型推断为 'hello,world'类型
// message_1 = 'hello,typescript'; // 'hello,world'类型和'hello,typescript'类型不一致，编译失败
var message = 1;
var UserClass = (function () {
    function UserClass() {
    }
    UserClass.prototype.a = function () {
    };
    return UserClass;
}());
var c = UserClass;
var user1 = new UserClass();
var user2 = new c();
var user3 = { userName: 'wander', age: 28, a: function () { } };
