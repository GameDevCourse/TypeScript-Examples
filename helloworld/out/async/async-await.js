var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ajax = (url) => {
    return new Promise((reslove, reject) => {
        $.ajax(url, {
            "success": (data) => {
                reslove(data);
            }
        });
    });
};
function getOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        let users = yield ajax("http://your.api/users");
        let uId = users[0].id;
        let userInfo = yield ajax(`http://your.api/user_detail?id=${uId}`);
        let orderId = userInfo.orderId;
        let orderInfo = yield ajax(`http://your.api/order_detail?id=${orderId}`);
        return orderInfo;
    });
}
try {
    let orderInfo = getOrder();
    console.log(orderInfo);
}
catch (e) {
    console.error(e);
}
