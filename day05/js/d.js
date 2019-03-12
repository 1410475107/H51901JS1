var li = document.querySelectorAll('.djs>li');
// 开启定时器
setInterval(function () {
    var endtime = '2019-03-12 17:30:00';
    var s = new Date(endtime) - new Date(); //计算剩余的时间   单位 毫秒
    // 计算剩余的小时
    var hour = parseInt(s / (1000 * 60 * 60));
    // 计算剩余的分钟数
    var minu = parseInt((s % (1000 * 60 * 60)) / (1000 * 60));
    // 计算剩余的秒数
    var sec = parseInt((s % (1000 * 60)) / 1000);
    // 剩下的毫秒数
    var ms = s % 1000;

    li[0].innerHTML = (hour < 10 ? '0' : '') + hour;
    li[1].innerHTML = (minu < 10 ? '0' : '') + minu;
    li[2].innerHTML = (sec < 10 ? '0' : '') + sec;
    li[3].innerHTML = (ms < 100 ? '0' : '') + ms;
}, 78);