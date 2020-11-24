
$(function() {
var password="ceshi";
password=prompt('请输入密码 (本网站需输入密码才可进入):','')
if (password != 'ceshi') {
alert("密码不正确,无法进入本站!!");
 window.opener=null; window.close();}
});
