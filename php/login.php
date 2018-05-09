<?php
include('db.php');
$username = $_POST['username'];
$password = $_POST['password'];
$query = "SELECT * FROM login_details where username = '$username' AND password = '$password'";
$getId = "SELECT id FROM login_details WHERE username ='$username'";
$result= $conn->query($query);
$Id= $conn->query($getId);
$ID = $Id->fetch(PDO::FETCH_NUM);
if(($result->rowcount())==1){
    session_start();
    $_SESSION['AUTH']=true;
    $_SESSION['NAME']=$username;
    $_SESSION['ID']= $ID[0];
    header('location:http://localhost/Blick/html/dashboard.php');
}
else{
    echo 'wrong details';
}
?>