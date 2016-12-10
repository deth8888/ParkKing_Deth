
<script>

$("#login").click(function(){
var username=$("#username").val();
var password=$("#password").val();
var dataString="username="+username+"&password="+password+"&login=login";
if($.trim(username).length>0 & $.trim(password).length>0)
{
$.ajax({
type: "GET",
url: "http://superprogrammer.tech/mobile_api.php",
data: dataString,
crossDomain: true,
cache: false,
beforeSend: function(){ $("#btnlogin").html('Connecting...');},
success: function(data){
if(data=="success")
{
localStorage.login="true";
localStorage.username=username;
window.location.href = "home.php";
}
else if(data=="failed")
{
alert("Login error");
$("#btnlogin").html('Login');
}
}
});
}return false;
});
</script>