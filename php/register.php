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
    //this automatically logs the registered user
    $query = "SELECT * FROM login_details where username = '$name' AND password = '$pass'";
    $getId = "SELECT id FROM login_details WHERE username ='$name'";
    $result= $conn->query($query);
    $Id= $conn->query($getId);
    $ID = $Id->fetch(PDO::FETCH_NUM);
    if(($result->rowcount())==1){
        session_start();
        $_SESSION['AUTH']=true;
        $_SESSION['NAME']=$name;
        $_SESSION['ID']= $ID[0];
        header('location:http://localhost/Blick/html/dashboard.php');
    }
}  
}else{
    echo 'if i hear say i work';
}
?>