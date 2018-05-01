<?php
include('db.php');

$username = $_POST['username'];
$password = $_POST['password'];
$query = "SELECT * FROM login_details where username = '$username' AND password = '$password'";

$result= $conn->query($query);

if($result->columncount()==1){
    header('dashboard.html');
}
else{
    echo 'wrong details';
}
