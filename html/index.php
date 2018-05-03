<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Blick</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale = 1.0, user-scalable = no">
    <link rel="stylesheet" type="text/css" href="../css/index.css">
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Khula" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Gugi" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
<link type="text/css" rel="stylesheet" href="../materialize/css/materialize.min.css"  media="screen,projection"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" crossorigin="anonymous">
<script type="text/javascript" src="../javascript/Jquery.js"></script>
<script type="text/javascript" src="../javascript/request.js"></script>

</head>
<body>
    
    
    <nav>
        <div class="nav-wrapper">
          <div class="brand-logo left">Blick</div>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#">Trending Proposals</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="#">Trending Proposals</a></li>
        <li><a href="#">Donate</a></li>
        <li><a href="#">About Us</a></li>
      </ul>

      <div id="intro">A simple platform for the expression of political views<br/>
      and proposals.
      </div>
    
    <div id='form' class="col-sm-12">
    <form action="../php/login.php" method="post" id="login">
    <h2 class="sign">Log In</h2>
    <p>
        
        <input type="text" name="username" id="username" placeholder="Enter Username..">
    </p>
        
    <p>
        
        <input type="password" name="password" id="password" placeholder= "Enter password..">
    </p>
        
    <p>
       <input type="submit" name="" value="Log In"> 
    </p>
        <h3 id="reg"><a href='#'>Sign Up</a></h3>
    </form>

    <footer class="page-footer">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">Footer Content</h5>
                  <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <h5 class="white-text">Contact Us</h5>
                  <ul class="logo">
                    <a href="#"><i class="fas fa-envelope fa-2x"></i></a>
                    <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
                    <a href="https://github.com/MichaelGee"><i class="fab fa-github fa-2x"></i></a>
                    <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
              <p class="rights">© 2018 Blick, All Rights Reserved.</p>
              </div>
            </div>
          </footer>
              

    <!--Registration form-->
    
    <div id="overlay">
        <div class="col-sm-12">
            <div>
                <form action="../php/register.php" method="post" id="regs">
                <h2 id="reg">Register Here</h2>
                    <p>
                        <label for="username">Username</label>
                        <input type="text" name="name" id="name" placeholder="Name">
                        <h5 id="name_id">*make sure there aint no spaces in your name</h5>
                    </p>
        
        
                    <p>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password2" placeholder="Choose a password">
                        <h5 id="first">*enter a password longer than 6 characters</h5>
            
                    </p>
        
                    <p>
                        <label for="confirm_password">Confirm Password</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm password">
                        <h5 id="second">*please confirm your password</h5>
                        <h5 id="second2">*passwords dont match</h5>
                    </p>
        
        
                    <input type ="submit" name='submit'  value="Sign Up" id="submit">
                </form>
                </div>
    </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
    <script type="text/javascript" src="../materialize/js/materialize.min.js"></script>
    
    <script type="text/javascript" src="../javascript/index.js"></script>

    <script>
     $(document).ready(function(){
    $('.sidenav').sidenav();
  });
      
    </script>
</body>
</html>