import * as co from 'co';

const ajax = (url: string) => {
    return new Promise<any>((reslove, reject) => {
        $.ajax(url, {
            "success": (data) => {
                reslove(data);
            }
        })
    });
}

co(function* () {
    let users = yield ajax("http://your.api/users");
    let uId = users[0].id;
    let userInfo = yield ajax(`http://your.api/user_detail?id=${uId}`);
    let orderId = userInfo.orderId;
    let orderInfo = yield ajax(`http://your.api/order_detail?id=${orderId}`);
    return orderInfo;

}).then((orderInfo) => {
    console.log(orderInfo);
}).catch((error) => {
    console.error(error);
});