(function () {
    function Round(selector) {
        // 构造函数里面负责属性的设置和初始函数的执行
        // 所有的要操作的图片和点
        this.allimg = document.querySelectorAll(selector + '>ul.img>li');
        this.allpoint = document.querySelectorAll(selector + '>ul.point>li');
        // 初始化调用  如果不调用不会执行
        this.init();
    }
    //在构造函数的原型之上定义需要的方法
    Round.prototype.init = function () {
        console.log(this.allimg);
        // 把this保留下来，防止下面修改this的指向
        var _this = this;
        // 循环的方式绑定事件
        for (var i = 0; i < _this.allpoint.length; i++) {
            // 点击事件是在最后点击的时候执行的，需要自运行函数提前设置好值()()
            _this.allpoint[i].onclick = (function (a) {
                console.log(a);
                // 点击需要事件处理函数，这里返回一个函数作为事件处理函数
                return function(){
                    //隐藏所有的图片
                    for(var j=0; j<_this.allimg.length;j++){
                        _this.allimg[j].style.display = 'none';
                    }
                    //对应的图片显示出来
                    _this.allimg[a].style.display = 'block';
                }
            })(i);
        }
    }
    // 暴露一个接口道全局
    window.Round = Round;
})();