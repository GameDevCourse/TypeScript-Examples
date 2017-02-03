$.ajax("http://your.api/users", {
    "success": (users) => {
        let uId = users[0].id;
        $.ajax("http://your.api/user_detail?id=${uId}", {
            "success": (userInfo) => {
                var oId = userInfo.orderId;
                $.ajax(`http://your.api/order_detail?id=${oId}`, {
                    "success": (orderInfo) => {
                        console.log(orderInfo);
                    }
                });
            }
        });
    }
});
try {
    $.ajax("http://your.api/users", {
        "success": (users) => {
            // 假设 users 返回空，这里会抛出异常
            let uId = users[0].id;
        }
    });
}
catch (e) {
    // 如果 success 函数抛出了异常，try...catch 无法进行捕获
    // 此处代码无法被触发
    alert('数据获取失败');
}
const getUsers = (data, callback) => {
    $.ajax("http://your.api/users", {
        "success": (users) => {
            callback(0, users);
        }
    });
};
const getFirstUserDetail = (users, callback) => {
    try {
        let uId = users[0].id;
        $.ajax(`http://your.api/user_detail?id=${uId}`, {
            "success": (userInfo) => {
                callback(0, userInfo);
            }
        });
    }
    catch (e) {
        callback("get user detail error", null);
    }
};
const getOrderInfo = (userInfo, callback) => {
    var orderId = userInfo.orderId;
    $.ajax(`http://your.api/order_detail?id=${orderId}`, {
        "success": (orderInfo) => {
            callback(orderInfo);
        }
    });
};
async.waterfall([
    getUsers,
    getFirstUserDetail,
    getOrderInfo
], (err, data) => {
    if (err) {
        alert(err);
    }
    else {
        console.log(data);
    }
});
