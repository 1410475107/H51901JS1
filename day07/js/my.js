(function(){
    var a = 1;
    function $(selector){
        // 根据选择器找到所有的元素
        var all = document.querySelectorAll(selector);
        return {
            css123:function(prop, value){
                // 循环的方式修改每一个元素的样式
                for(var i=0; i < all.length; i++){
                    //两个实参的情况
                    if(arguments.length == 2){
                        all[i].style[prop] = value;
                    }else{
                        //循环对象，修改每个属性
                        for(var p123 in prop){
                            all[i].style[p123] = prop[p123];
                        }
                    }
                }
                return this;
            }
        }
    }
    // 暴露一个接口给全局使用
    window._1901 = $;
})();

