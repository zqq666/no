//浮动层关闭
var picTop = 0;
var advTop = 0;
function init() {
    picTop = document.getElementById("advLayer").style.pixelTop;
    advTop = document.getElementById("closeAdv").style.pixelTop;
}
function move() {
    document.getElementById("advLayer").style.pixelTop = picTop + document.body.scrollTop;
    document.getElementById("closeAdv").style.pixelTop = advTop + document.body.scrollTop;
}
function closeAdv() {
    document.getElementById("advLayer").style.display = "none";
    document.getElementById("closeAdv").style.display = "none";
}
window.onscroll = move; //窗口的滚动事件，当页面滚动时调用move( )函数
//背景轮换
var curIndex = 0;
//时间间隔(单位毫秒)，每6秒钟显示一张
var timeInterval = 6000;
//定义一个存放照片位置的数组
var arr = new Array();
arr[0] = "./images/bodybg-1.jpg";
arr[1] = "./images/bodybg-2.jpg";
arr[2] = "./images/bodybg-3.jpg";
setInterval(changeImg, timeInterval);
function changeImg() {
    if (curIndex == arr.length - 1) {
        curIndex = 0;
    } else {
        curIndex += 1;
    }
    //设置body的背景图片
    document.body.style.backgroundImage = "URL(" + arr[curIndex] + ")"; //显示对应的图片
}
//搜索框获得焦点时，提示文字消失
$(function () {
    $('.input_test').bind({
        focus: function () {
            if (this.value == this.defaultValue) {
                this.value = "";
            }
        },
        blur: function () {
            if (this.value == "") {
                this.value = this.defaultValue;
            }
        }
    });
})

//回到顶部
$(function () {
    $(window).scroll(function () {
    var sc = $(window).scrollTop();
    var rwidth = $(window).width()
    if (sc > 0) {
        $("#goTopBtn").css("display", "block");
        $("#goTopBtn").css("left", (rwidth - 36) + "px")
    } else {
        $("#goTopBtn").css("display", "none");
    }
})
$("#goTopBtn").click(function () {
    var sc = $(window).scrollTop();
    $('body,html').animate({
        scrollTop: 0
    }, 500);
})
});
