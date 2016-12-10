<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Home</title>
<link rel="stylesheet" href="style.css" type="text/css" />
<script src="libs/bootstrap/js/jquery-2.2.4.js"></script>

</head>

<style>
#footer {
    clear: both;
    position: relative;
    z-index: 10;
    height: 3em;
    margin-top: -3em;
}
</style>
 
<body>

<?php
include('connection.php');
$username=mysqli_real_escape_string($con, htmlspecialchars(trim($_POST['username'])));
$user_check=$_POST['username'];
$sql = mysqli_query($con,"SELECT username FROM users WHERE username='$user_check' ");

$row=mysqli_fetch_array($sql,MYSQLI_ASSOC);
$username=$row['username'];
?>

<h1 class="hello">Good Day, <em><?php echo $username;?>!</em></h1>

<a id="logout" class="button button-clear" href="#">Logout</a>

<script>
$(document).ready(function(){
	$("#logout").click(function(){
		// alert("test");
		localStorage.login="false";
		window.location.href = "index.html";
	});
});

</script>
</body>
</html>