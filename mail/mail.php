<?php
$name = $_POST['name'];
$subject= $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_message = "

Name: ".$name."
Email: ".$email."
Message: ".$message."

";

mail ("nditc.official@gmail.com" ,$subject , $email_message);
header("location: ../home.html");
?>