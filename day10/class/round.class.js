class Round {
    constructor(selector, speed = 1500) {
        // 构造函数完成属性的设置和初始化
        // 找到所有的“图片”  ====  li
        this.allimg = document.querySelectorAll(selector + '>ul.img>li');
        this.allpoint = document.querySelectorAll(selector + '>ul.point>li');
        this.div = document.querySelector(selector);
        //获取元素总数
        this.num = this.allpoint.length;
        console.log(this.num);
        // 定时器的id
        this.sid = 0;
        // 是否开启定时器的标识符
        this.auto = 0;
        // 当前要显示的图片的下标
        this.p = 0;
        // 播放速度
        this.speed = speed;
        // 需要初始化
        this.init();
    }
    init() {
        this.allpoint[0].style.backgroundColor = '#f01';
        for (var i = 0; i < this.allpoint.length; i++) {
            this.bindclick(i);
        }
        //鼠标移入整个盒子，清除定时器
        var _this = this;
        this.div.onmouseover = function () {
            /*
            if(_this.sid){
                clearInterval(_this.sid);
            }*/
            _this.sid && clearInterval(_this.sid);
        }
        //鼠标移开
        this.div.onmouseout = function () {
            if (_this.auto) {
                _this.autoplay(_this.speed);
            }
        }
    }
    bindclick(p) {
        // 解决this指向被改变的问题
        var _this = this;
        this.allpoint[p].onclick = function () {
            //循环的方式隐藏所有图片
            _this.allimg;
            for (var i = 0; i < _this.allimg.length; i++) {
                _this.allimg[i].style.display = 'none';
                //修改点的背景颜色
                _this.allpoint[i].style.backgroundColor = '';
            }
            //显示对应的图片
            _this.allimg[p].style.display = 'block';
            // 修改当前点的样式
            // _this.allpoint[p].style.backgroundColor = '#f01';
            this.style.backgroundColor = '#f01';
            //修改当前显示的图片的下标
            _this.p = p;
        }
    }
    autoplay() {
        // 开启自动轮播的标识符
        this.auto = 1;
        var _this = this;
        this.sid = setInterval(function () {
            _this.allpoint[++_this.p % (_this.num)].click();
        }, _this.speed);
    }
}