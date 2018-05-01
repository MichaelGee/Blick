<?php
include('db.php');
$username = $_POST['name'];
$password = $_POST['password'];
$query = "INSERT INTO MyGuests (firstname, lastname)VALUES ($username, $password)";
$conn->exec($query);
if ($conn->exec($query) === TRUE) {
    echo "You have successfully signed up";
} else {
    echo 'check your details';
}

?>