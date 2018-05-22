<?php
include('db.php');
$datasql = "SELECT * FROM proposals";
$result = $conn->query($datasql);
$result_array = array_reverse($result->fetchAll(PDO::FETCH_ASSOC));
?>
<ul id="content">
<?php foreach ($result_array as $info){?>
    <li>
      <div class='row'>
        <div id='comment' class='col s12 m5'>
          <div class='card-panel'>
            <span class='black-text'>
            <h6><?php echo $info['name']?></h6><p id="text"><br>
            <?php echo $info['post']?></p>
            </span><p>
            <br><i class='far fa-edit fa-1x' id="edit"></i>
            <i class="far fa-heart" id="like" name='<?php echo $info['id']?>' onclick="like(<?php echo $info['id']?>);">
          </i><p><?php?></p>
          </div>
        </div>
      </div>  
    </li>
<?php }?>
</ul>