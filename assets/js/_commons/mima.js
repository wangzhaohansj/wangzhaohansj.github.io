function password() {
var testV = 1;
var pass1 = prompt('请输入密码:admin','');
while (testV < 3000) {
if (!pass1)
history.go(-1);
if (pass1 == "shkl") {
alert('密码正确');
break;

}
testV+=1;
var pass1 =
prompt('密码不正确');
}
if (pass1!="password" & testV ==3)
history.go(-1);
return " ";
}
document.write(password());
