function password() {
var testV = 1;
var pass1 = prompt('请输入密码:688','');
while (testV < 3000) {
if (!pass1) 
history.go(-1);
if (pass1 == "688") {
alert('密码正确，准予进入！不过过路费还是要给的。2毛！');
break;

}
testV+=1;
var pass1 =
prompt('密码不正确，你没获得主人的批准。');
}
if (pass1!="password" & testV ==3)
history.go(-1);
return " ";
}
document.write(password());
