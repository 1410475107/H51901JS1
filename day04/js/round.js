// 找到所有的○
var point = document.querySelectorAll('.point>li');
//找到所有的“图片”
var imgs = document.querySelectorAll('.img>li')

console.log(point);
// 事件三要素

for(var ind=0; ind < point.length; ind++){
    showme(ind);
}

function showme(i){
    point[i].onclick = function(){
        // 把所有的图片隐藏
        for(var img of imgs){
            img.style.display = 'none';
        }
        // 显示○对应的图片
        imgs[i].style.display = 'block';
    }
}