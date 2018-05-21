var page_source1 ='
<!DOCTYPE html>
<html>
<head>
<title>Dashboard</title>
<meta name="theme-color" content="#999999" />
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
            <textarea id="textarea2" name = "propose" class="materialize-textarea" data-length="500"></textarea>
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
  <ul id="content">
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            guy</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='92'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            babao</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='91'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            baba</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='90'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            cat</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='89'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ologbeni</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='88'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            df</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='87'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            x</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='86'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            cat</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='85'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            my niga</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='84'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            oga ade</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='83'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            proposals</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='82'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            nigga</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='81'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            guy how far</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='80'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            x</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='79'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            shut the hell up have been there</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='76'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ogbenni</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='72'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>YoungBillioniare</h6><p id="text"><br>
            Hello world</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='71'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>heavenbound</h6><p id="text"><br>
            am back</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='70'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>heavenbound</h6><p id="text"><br>
            hello</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='69'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            babae shut the fuck up</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='68'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            alaye shut the fuck up</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='67'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            i dey moffo</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='66'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            sup ma nigga</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='65'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            fgh</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='64'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            fg</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='63'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ff</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='62'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            cat</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='61'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            am fine</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='60'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            how are you</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='59'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            ogbenni</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='58'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            guess whos king you bitch ass nigga</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='57'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            pirates of the carrebean</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='56'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            cxv</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='55'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ddddd</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='54'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ddddd</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='53'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            asd</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='52'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            </p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='51'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            Well done</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='50'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            proposal</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='49'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            proposals are Kinda Dumb Dont You Think</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='48'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            dd</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='47'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>nightmares</h6><p id="text"><br>
            I AM AWESOME , DEAL!</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='46'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            Sometimes i wish i could just pause time and change every fucking decision i have ever made. Maybe things would have been different. But then, life is just gonna bloody us all up, all you have to do is put a bandage on the shit and keep moving.</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='42'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
</ul>    </div>

 <!-- Compiled and minified JavaScript -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
 <script type="text/javascript" src="../materialize/js/materialize.min.js"></script>
 <script type="text/javascript" src="../javascript/request.js"></script>
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
';

var page_source2 = '
<!DOCTYPE html>
<html>
<head>
<title>Dashboard</title>
<meta name="theme-color" content="#999999" />
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
            <textarea id="textarea2" name = "propose" class="materialize-textarea" data-length="500"></textarea>
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
  <ul id="content">
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            guy</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='92'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            babao</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='91'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            baba</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='90'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            cat</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='89'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ologbeni</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='88'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            df</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='87'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            x</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='86'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            cat</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='85'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            my niga</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='84'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            oga ade</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='83'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            proposals</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='82'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            nigga</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='81'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            guy how far</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='80'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            x</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='79'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>catastriphic</h6><p id="text"><br>
            shut the hell up have been there</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='76'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ogbenni</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='72'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>YoungBillioniare</h6><p id="text"><br>
            Hello world</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='71'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>heavenbound</h6><p id="text"><br>
            am back</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='70'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>heavenbound</h6><p id="text"><br>
            hello</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='69'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            babae shut the fuck up</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='68'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            alaye shut the fuck up</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='67'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            i dey moffo</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='66'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            sup ma nigga</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='65'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            fgh</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='64'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            fg</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='63'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ff</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='62'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            cat</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='61'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            am fine</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='60'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            how are you</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='59'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>kingkunta</h6><p id="text"><br>
            ogbenni</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='58'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            guess whos king you bitch ass nigga</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='57'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            pirates of the carrebean</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='56'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            cxv</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='55'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ddddd</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='54'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>webblaster</h6><p id="text"><br>
            ddddd</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='53'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            asd</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='52'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            </p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='51'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            Well done</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='50'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            proposal</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='49'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            proposals are Kinda Dumb Dont You Think</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='48'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            dd</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='47'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>nightmares</h6><p id="text"><br>
            I AM AWESOME , DEAL!</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='46'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6>KingKunta</h6><p id="text"><br>
            Sometimes i wish i could just pause time and change every fucking decision i have ever made. Maybe things would have been different. But then, life is just gonna bloody us all up, all you have to do is put a bandage on the shit and keep moving.</p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i><i class="far fa-heart" id="like" name='42'></i><p><?php?></p>
          </div>
        </div>
      </div>
    </li>
</ul>    </div>

 <!-- Compiled and minified JavaScript -->
 <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>
 <script type="text/javascript" src="../materialize/js/materialize.min.js"></script>
 <script type="text/javascript" src="../javascript/request.js"></script>
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
';

function TruthSayer(){
    if(page_source1===page_source2){
        console.log("naso my broda");
    }
    else{
        console.log('nobiso my broda');
    }
}