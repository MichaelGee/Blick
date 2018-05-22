<?php
include('db.php');
//click event from the client side sending data through ajax
$value =  $_POST['identification'];
$post_id = intval($value);

//select likes if existing from the likes table if not already 
//existing initialize it then select it
$counter_sql = "SELECT likes FROM likes WHERE post_id = '$post_id'";

$number = $conn->query($counter_sql);
if($number->rowcount()>0){
    echo "got somtin baby";

}
else {
    echo "notin dey ooo ma broda";
    $insert_sql = "INSERT INTO likes (post_id,likes) VALUES ('$post_id','0')";
    $insert = $conn->exec($insert_sql);
}

$array = $number->fetch(PDO::FETCH_ASSOC);
$counter = $array['likes'];
++$counter;
echo $counter;

//to know which post the client wants to like and like the appropriate post
$checksql = "SELECT * FROM likes WHERE post_id = '$post_id'";
$checker = $conn->query($checksql);

if($checker->rowcount()===0){
$liker_sql = "INSERT INTO likes (post_id,likes) VALUES ('$post_id','$counter')";
$like = $conn->exec($liker_sql);
echo "$counter";
}
else{
$existing_post_id_sql = "UPDATE likes SET likes = '$counter' WHERE post_id = '$post_id'";
$like = $conn->exec($existing_post_id_sql);
}
?>