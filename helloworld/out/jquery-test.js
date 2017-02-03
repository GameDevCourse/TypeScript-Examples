$(document).ready(() => {
    $("#app").css("width", 200);
});
$.ajax({
    url: 'www.baidu.com', success: function (data) {
        console.log(data);
    }
});
let app = document.getElementById("app");
// app.onclick = () => alert('hello,world');
if (app) {
    app.onclick = () => alert('hello,world');
}
