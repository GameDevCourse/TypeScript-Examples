const ajax = (url: string) => {
    return new Promise<any>((reslove, reject) => {
        $.ajax(url, {
            "success": (data) => {
                reslove(data);
            }
        })
    });
}

ajax("http://your.api/users").then((users) => {
    let uId = users[0].id;
    return ajax(`http://your.api/user_detail?id=${uId}`);
}).then((userInfo) => {
    let orderId = userInfo.orderId;
    return ajax(`http://your.api/order_detail?id=${orderId}`);
}).then((orderInfo) => {
    console.log(orderInfo);
}).catch((error) => {
    console.log(error);
})


