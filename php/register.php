<?php
include('db.php');
$name = $_POST['name'];
$pass = $_POST['password'];
$checksql = "SELECT * FROM login_details WHERE username = '$name'";
$checker = $conn->query($checksql);
echo $checker->rowcount();

if($checker->rowcount()>0){
    echo "user already exists";
}else{
    $query = "INSERT INTO login_details (username,password) VALUES ('$name','$pass')";
    if ($conn->exec($query) === 1) {
        echo "You have successfully signed up";
    } else {
        echo 'check your details';
    }
}
?>