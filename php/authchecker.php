<?php
session_start();
if(!($_SESSION['AUTH'])){
    header('location:../html/index.php');
}
?>