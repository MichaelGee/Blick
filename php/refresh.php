<?php
include('db.php');
session_start();
$datasql = "SELECT * FROM proposals";
$result = $conn->query($datasql);
$result_array = array_reverse($result->fetchAll(PDO::FETCH_ASSOC));
?>
<?php
  function isitliked(){
      include('db.php');
      $_SESSION['NAME'];
      $id = $GLOBALS['postid'];
      $post_like_sql = "SELECT name FROM people_who_liked WHERE post_id ='$id'";
      $post_like = $conn->query($post_like_sql);
      $all_post_names = $post_like->fetchAll(PDO::FETCH_ASSOC);
      $counter = 0;

      $indexes = array_keys($all_post_names,$_SESSION['NAME'] ); //array(0, 1)
      count($indexes);
      //if any body liked the post at all sef
      if(count($all_post_names)>0){
      //checks if the session user name is equal to anyname in the names who liked
        foreach ($all_post_names as $all_post_name){
          $checkname = $all_post_name['name'];
          if($checkname === $_SESSION['NAME']){
              ++$counter;
          }
        }
      }
      //now we decide to like based on the counter
      if($counter>=1){
        return $class = "liked";
      }else{
        return $class = "";
      }
    }    
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
             <?php
            //get number of likes for each uniqie id of post ids
            $postid = $info['id'];
            $like_sql ="SELECT likes FROM likes WHERE post_id = '$postid'";
            $num_likes =$conn->query($like_sql);
            $like_data = $num_likes->fetch(PDO::FETCH_ASSOC);
            $likes=$like_data['likes'];
            ?>
            <i class="far fa-heart <?php echo isitliked();?>" id="like"  onclick="like(<?php echo $info['id']?>);">
           
          </i><span><?php echo $likes;?></span>
          </div>
        </div>
      </div>  
    </li>
<?php }?>
</ul>