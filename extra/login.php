<?php
include('connection.php');
//header('Access-Control-Allow-Origin: *');


if(isset($_POST['login']))
{

$username=mysqli_real_escape_string($con, htmlspecialchars(trim($_POST['username'])));
$password=mysqli_real_escape_string($con, htmlspecialchars(trim($_POST['password'])));
//$password = md5($password);
$login=mysqli_num_rows(mysqli_query($con, "select * from users where username='$username' and password='$password'"));
if($login!==0)
{
echo "success";
}
else
{
echo "failed";
}
}
?>