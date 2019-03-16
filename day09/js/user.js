window.onload = function () {
    Reg();
}
// 注册的封闭空间
function Reg() {
    var btn = document.querySelector('input[type="button"]');
    btn.onclick = function () {
        var err = 0;
        // 账号信息判断
        var username = document.querySelector('input[name="username"]').value;
        var u_reg = /^\w{2,6}$/; //注意是对整个字符进行验证  ^   $
        if (!u_reg.test(username)) {
            console.log('账号信息有误');
            err++;
            // return; //使用return  断点
        }
        //密码的验证
        var passwd1 = document.querySelector('input[name="passwd1"]').value;
        var p_reg = /^(?=.*\d+)(?=.*\W+)(?=.*[a-zA-Z]+).{6,16}$/;
        if (!p_reg.test(passwd1)) {
            console.log('密码必填，字母、数字、特殊符号,6~16');
            err++;
            // return;
        }
        // 确认密码的验证
        var passwd2 = document.querySelector('input[name="passwd2"]').value;
        if(passwd1  != passwd2){
            console.log('两次密码不一致');
            err++;
            // return;
        }
        // 手机号的验证
        var tel_reg = /^1[3-9]{1}\d{9}$/;
        // 接收用户输入的数据
        var tel = document.querySelector('input[name="tel"]').value;
        if (!tel_reg.test(tel)) {
            console.log('请输入正确的手机号');
            err++;
            // return;
        }

        if(!err){

            // 把数据提交到服务器   ajax  和服务器进行通信
            // 数据提交成功之后，到登录页面登录   跳转到登录页面
            window.location.href = './login.html';
        }
    }

    // 刷新的按钮
    var reload = document.querySelector('.reload');
    reload.onclick = function(){
        window.location.reload();
    }
}