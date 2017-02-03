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
        })
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