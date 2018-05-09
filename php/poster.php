<?php
include('authchecker.php');
include('db.php');
$name = $_SESSION['NAME'];
$post = $_POST['propose'];
$getId ="SELECT id FROM login_details WHERE username ='$name'";
$user_id = $conn->query($getId);
$sql = "INSERT INTO proposals (user_id,post,name) VALUES('$user_id','$post','$name')";
$conn->exec($sql);
$datasql = "SELECT * FROM proposals";
$result=$conn->query($datasql);
?>