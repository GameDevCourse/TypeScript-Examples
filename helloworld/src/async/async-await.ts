const ajax = (url: string) => {
    return new Promise<any>((reslove, reject) => {
        $.ajax(url, {
            "success": (data) => {
                reslove(data);
            }
        })
    });
}

async function getOrder() {
    let users = await ajax("http://your.api/users");
    let uId = users[0].id;
    let userInfo = await ajax(`http://your.api/user_detail?id=${uId}`);
    let orderId = userInfo.orderId;
    let orderInfo = await ajax(`http://your.api/order_detail?id=${orderId}`);
    return orderInfo;
}

try {
    let orderInfo = getOrder();
    console.log(orderInfo);
}
catch (e) {
    console.error(e);
}