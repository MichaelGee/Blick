<?php
include('../php/authchecker.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Dashboard</title>
<meta name="theme-color" content="#317EFB" />
<meta name="viewport" content="width=device-width, initial-scale = 1.0, user-scalable = no">
<link rel="stylesheet" type="text/css" href="../css/dashboard.css">
<link href="https://fonts.googleapis.com/css?family=Quicksand:600" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Khula" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
<link type="text/css" rel="stylesheet" href="../materialize/css/materialize.min.css"  media="screen,projection"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script type="text/javascript" src="../javascript/Jquery.js"></script>
</head>
<body>

    <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Feeds</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#" id="proLink">Your Proposals</a></li>
            <li><a href = "../php/logout.php"class="waves-effect waves-light btn">Logout</a></li>
          </ul>
        </div>
      </nav>
    
      <ul class="sidenav" id="mobile-demo">
        <li><a href="../php/logout.php">Logout</a></li>
      </ul>
              


<div class="row">
    <div id="textarea" class="col s12 m5">
      <div class="card-panel">
      <div class="row">
    <form  action="../php/poster.php" method="post" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" name = "propose" class="materialize-textarea" data-length="1000"></textarea>
            <label for="textarea2">Proposal</label>
        </div>
        </div>
        <button  id="post" class="btn waves-effect waves-light" type="submit" name="action">Post</button>     
    </form>
    </div>
    </div>
  </div>
</div>
    <div id="content-container">
  <?php include('../php/refresh.php');?>
    </div>

 <!-- Compiled and minified JavaScript -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
 <script type="text/javascript" src="../materialize/js/materialize.min.js"></script>
 <script type="text/javascript" src="../javascript/request.js"></script>
 <script type="text/javascript" src="../javascript/makeitred.js"></script>
    <script>

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $('#textarea1').val();
  M.textareaAutoResize($('#textarea1'));
  
  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
        
      
    </script>

</body>

</html>
