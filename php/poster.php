<?php
include('authchecker.php');
include('db.php');
$name = $_SESSION['USERNAME'];
$post = $_POST[''];
$getId ="SELECT id FROM login_details where username ='$name'";
$user_id = $conn->query($getId);
$sql = "INSERT INTO proposal (user_id,name,post) VALUES('$user_id','$name',$post)";
$conn->exec($sql);
$datasql = "SELECT * FROM proposal";
$result=$conn->query($datasql);
?>