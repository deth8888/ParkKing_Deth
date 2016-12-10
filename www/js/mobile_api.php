<?php

//MOBILE API


header('Access-Control-Allow-Origin: *'); //Should work in Cross domain ajax Calling request


$mysql_hostname = "localhost";
$mysql_user = "tonsqknx_parking";
$mysql_password = "P@ssword1227";
$mysql_database = "tonsqknx_parking";

$con = mysqli_connect($mysql_hostname, $mysql_user,$mysql_password,$mysql_database); //website

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

if(isset($_GET['type']))
{
    if($_GET['type'] == "login")
	{
		$username = $_GET['username'];
		$password = $_GET['password'];
        
		//Create Query
		$query = "Select * from users Where username='$username' and password='$password'";
		//Fire your Query against database
		$result1 = mysqli_query($con,$query);
		//get total no of rows from database according to the query
		$totalRows = mysqli_num_rows($result1);
		
		//Prepare Code for json format
		if($totalRows > 0)
		{
			$recipes = array();
            
			while($recipe = mysqli_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = $recipe;
			}
			
			$output = json_encode($recipes);
                
			echo $output;
		}
        else
        {
            echo "Got Error While Logging In.";
        }
}
        //login for backup email

        else if($_GET['type'] == "login2")
	{
		$backup_email = $_GET['backup_email'];
		$password = $_GET['password'];
        
		//Create Query
		$query = "Select * from users Where backup_email='$backup_email' and password='$password'";
		//Fire your Query against database
		$result1 = mysqli_query($con,$query);
		//get total no of rows from database according to the query
		$totalRows = mysqli_num_rows($result1);
		
		//Prepare Code for json format
		if($totalRows > 0)
		{
			$recipes = array();
            
			while($recipe = mysqli_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = $recipe;
			}
			
			$output = json_encode($recipes);
                
			echo $output;
		}
        else
        {
            echo "Got Error While Logging In.";
        }
	}
        else if($_GET['type'] == "list")
	{
		//Create Query
		$query = "Select * from parking";
                //Fire your Query against database
		$result1 = mysqli_query($con,$query);
		//get total no of rows from database according to the query
		$totalRows = mysqli_num_rows($result1);
		
		//Prepare Code for json format
		if($totalRows > 0)
		{
			$recipes = array();
            
			while($recipe = mysqli_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = $recipe;
			}
			
			$output = json_encode($recipes);
                
			echo $output;
		}
	}

		else if ($_GET['type'] == "signup")
		 {
		 // create query
                 $name=$_GET['name'];
                 $username=$_GET['username'];
                 $backup_email=$_GET['backup_email'];
                 $password=$_GET['password'];
                 $contactnum=$_GET['contactnum'];
	
                 //$name=mysqli_real_escape_string(htmlspecialchars(trim($_POST['name'])));
                 //$username=mysqli_real_escape_string(htmlspecialchars(trim($_POST['username'])));
                 //$backup_email=mysqli_real_escape_string(htmlspecialchars(trim($_POST['backup_email'])));
                 //$password=mysqli_real_escape_string(htmlspecialchars(trim($_POST['password'])));
                 //$contactnum=mysqli_real_escape_string(htmlspecialchars(trim($_POST['contactnum'])));

		 $login=mysqli_num_rows(mysqli_query($con,"select * from users where username='$username'"));
		 if($login!=0)
	         {
		 echo "exist";
		 }
		 else
		 {
		 echo "SIGE";

		//Create Query
		$query ="Insert into users (name,username,backup_email,password,contactnum) values ('$name','$username','$backup_email','$password','$contactnum')"; 
       		//Fire your Query against database
		$result1 = mysqli_query($con,$query);
		//get total no of rows from database according to the query
		$totalRows = mysqli_num_rows($result1);
		
		
		//Prepare Code for json format
			if($totalRows > 0)
			{
			$recipes = array();
            
			while($recipe = mysqli_fetch_array($result1, MYSQL_ASSOC))
			{
				$recipes[] = $recipe;
			}
			
			$output = json_encode($recipes);
                
			echo $output;
		
		}
 	}
 	}


		 
	else
        {
            echo "An Error has Occured.";
        
	}
	
     
    
}


?>