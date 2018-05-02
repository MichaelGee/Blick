<?php
include('db.php');
$username = $_POST['username'];
$password = $_POST['password'];
$query = "SELECT * FROM login_details where username = '$username' AND password = '$password'";

$result= $conn->query($query);

if(($result->rowcount())==1){
    session_start();
    $_SESSION['AUTH']=true;
    $_SESSION['NAME']=$username;

    header('location:../html/dashboard.php');
}
else{
    echo 'wrong details';
}
?>