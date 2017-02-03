console.log('hello,world');
function createUser() {
    var userName = "wander";
    var age = 28;
    return { userName, age };
}
let { userName, age } = createUser();
console.log(userName, age);
var array = ['hello', 'world'];
for (let value of array) {
    console.log(value);
}
var cc;
// let message;
// message = 'hello,world';
// let message = 'hello,world'; // message 推断为 string 类型
// message = 'hello,typescript'; // 'hello,typescript'类型是 string 类型的子类，编译通过
// const message_1 = 'hello,world'; // 由于使用了 const 关键字，类型推断为 'hello,world'类型
// message_1 = 'hello,typescript'; // 'hello,world'类型和'hello,typescript'类型不一致，编译失败
let message = 1;
class UserClass {
    a() {
    }
}
let c = UserClass;
let user1 = new UserClass();
let user2 = new c();
let user3 = { userName: 'wander', age: 28, a: function () { } };
let user = {
    userName: 'wander',
    age: 28,
    walk: (x, y) => { }
};
document.getElementById;
$("").css("width", 10);
