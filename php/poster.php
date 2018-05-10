<?php
include('authchecker.php');
include('db.php');
$name = $_SESSION['NAME'];
$post = $_POST['propose'];
$user_id = $_SESSION['ID'];
$sql = "INSERT INTO proposals (user_id,post,name) VALUES('$user_id','$post','$name')";
$conn->exec($sql);
?>