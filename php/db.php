<?php
$servername = "localhost";
$user_name = "root";
$pass_word = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=vote", $user_name, $pass_word);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?>