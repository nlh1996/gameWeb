<template>
    <div class="divAll"> 
    <div id="titles">新用户注册</div> 
    <div id="contents"> 
    <h3>基本信息</h3> 
    <hr width="95%" color="#f2f2f2"/> 
    <form action="#" onSubmit="return checkForm()"> 
        <div id="form-itemGroup"> 
        <label for="userName">用户名：</label> 
        <input type="text" id="userName" class="userName" onBlur="checkUserName()" oninput="checkUserName()"> 
        <span class="default" id="nameErr">请输入至少3位的用户名</span> 
        </div> 
        <div id="form-itemGroup"> 
        <label for="userPasword">密码：</label> 
        <input type="password" id="userPasword" class="userName" onBlur="checkPassword()" oninput="checkPassword()"> 
        <span class="default" id="passwordErr">请输入4到8位的密码</span> 
        </div> 
        <div id="form-itemGroup"> 
        <label for="userConfirmPasword">确认密码：</label> 
        <input type="password" id="userConfirmPasword" class="userName" onBlur="ConfirmPassword()" oninput="ConfirmPassword()"> 
        <span class="default" id="conPasswordErr">请再输入一遍密码</span> 
        </div> 
        <div id="form-itemGroup"> 
        <label for="userPhone">手机号码：</label> 
        <input type="text" id="userPhone" class="userName" onBlur="checkPhone()" oninput="checkPhone()"> 
        <span class="default" id="phoneErr">请输入11位手机号码</span> 
        </div> 
        <div> 
        <button type="submit" class="divBtn">注册</button> 
        </div> 
    </form> 
    </div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
            function checkForm(){ 
                var nametip = checkUserName(); 
                var passtip = checkPassword();  
                var conpasstip = ConfirmPassword(); 
                var phonetip = checkPhone(); 
                return nametip && passtip && conpasstip && phonetip; 
            } 
            //验证用户名   
            function checkUserName(){ 
                var username = document.getElementById('userName'); 
                var errname = document.getElementById('nameErr'); 
                var pattern = /^\w{3,}$/;  //用户名格式正则表达式：用户名要至少三位 
                if(username.value.length == 0){ 
                    errname.innerHTML="用户名不能为空"
                    errname.className="error"
                    return false; 
                } 
                if(!pattern.test(username.value)){ 
                    errname.innerHTML="用户名不合规范"
                    errname.className="error"
                    return false; 
                } 
                else{ 
                    errname.innerHTML="OK"
                    errname.className="success"; 
                    return true; 
                } 
            } 
            //验证密码   
            function checkPassword(){ 
                var userpasswd = document.getElementById('userPasword'); 
                var errPasswd = document.getElementById('passwordErr'); 
                var pattern = /^\w{4,8}$/; //密码要在4-8位 
                if(!pattern.test(userpasswd.value)){ 
                    errPasswd.innerHTML="密码不合规范"
                    errPasswd.className="error"
                    return false; 
                } 
                else{ 
                    errPasswd.innerHTML="OK"
                    errPasswd.className="success"; 
                    return true; 
                } 
            } 
            //确认密码 
            function ConfirmPassword(){ 
                var userpasswd = document.getElementById('userPasword'); 
                var userConPassword = document.getElementById('userConfirmPasword'); 
                var errConPasswd = document.getElementById('conPasswordErr'); 
                if((userpasswd.value)!=(userConPassword.value) || userConPassword.value.length == 0){ 
                    errConPasswd.innerHTML="上下密码不一致"
                    errConPasswd.className="error"
                    return false; 
                } 
                else{ 
                    errConPasswd.innerHTML="OK"
                    errConPasswd.className="success"; 
                    return true; 
                }    
            } 
            //验证手机号 
            function checkPhone(){ 
                var userphone = document.getElementById('userPhone'); 
                var phonrErr = document.getElementById('phoneErr'); 
                var pattern = /^1[34578]\d{9}$/; //验证手机号正则表达式 
                if(!pattern.test(userphone.value)){ 
                    phonrErr.innerHTML="手机号码不合规范"
                    phonrErr.className="error"
                    return false; 
                } 
                else{ 
                    phonrErr.innerHTML="OK"
                    phonrErr.className="success"; 
                    return true; 
                } 
            } 
        }
    }
</script>

<style scoped>
 .divAll{ 
   width:800px; 
   font-family:'黑体'; 
   margin:50px auto; 
   }
 #titles{ 
   font-weight:bold; 
   font-size:18px; 
   height:50px; 
   line-height:50px; 
   background:#FFF9F3; 
   text-align:center;  
   border:1px solid #CCC;; 
   }
 #contents{ 
    margin-top:20px; 
    background:#FFF9F3; 
    border:1px solid #CCC;; 
    }
  #form-itemGroup{ 
   padding:10px;  
    }
  #form-itemGroup label{ 
    display:inline-block; 
    width:100px; 
    height:32px; 
    line-height:32px; 
    color:#666; 
    text-align:right; 
    }
  #form-itemGroup .userName{ 
    width:200px; 
    height:40px; 
    line-height:40px; 
    border:1px solid #CCC; 
    }  
  #form-itemGroup .default{ 
    width:200px; 
    height:32px; 
    line-height:32px; 
    color:#999; 
    } 
  #form-itemGroup .error{ 
    height:32px; 
    line-height:32px; 
    color:#F00; 
    }
  #form-itemGroup .success{ 
    height:32px; 
    line-height:32px; 
    color:#096; 
    }  
  .divBtn{ 
    margin-top:20px; 
    margin-left:200px; 
    width:100px; 
    height:32px; 
    line-height:32px; 
    background-color:#F93; 
    margin-bottom:10px; 
    color:#ffffff; 
    font-weight:bold; 
    border:none; 
    } 
</style>

