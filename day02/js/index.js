//实际应用例子
var mydiv = document.querySelector('.mydiv');
mydiv && (
    mydiv.onclick = function () {
        console.log(1);
    }
)

var reg = document.querySelector('.reg');
reg && (
    reg.onclick = function () {
        console.log(1);
    }
)