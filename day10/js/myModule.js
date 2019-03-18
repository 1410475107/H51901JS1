let username = '张益杰';
let age = 21;
let gender = '男';
// 导出模块
let  obj = {
    name:username,
    age:age,
    say:function(){
        console.log(`我是${this.name}`);
    }
};
export default obj;
/*
(function(){
    let username = '张益杰';
    let age = 21;
    return {
        name:username,
        age:age,
        say:function(){
            console.log(`我是${this.name}`);
        }
    }
})();
*/