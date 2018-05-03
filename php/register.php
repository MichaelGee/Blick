<?php
if(isset($_POST['submit'])){
include('db.php');
$name = $_POST['name'];
$pass = $_POST['password'];
$checksql = "SELECT * FROM login_details WHERE username = '$name'";
$checker = $conn->query($checksql);

if($checker->rowcount()>0){
    echo "user already exists";
}else{
    $query = "INSERT INTO login_details (username,password) VALUES ('$name','$pass')";
    if (!($conn->exec($query) === 1)){
        echo 'check your details';
    }
}  
}else{
    echo 'if i hear say i work';
}
?>