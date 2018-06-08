<?php
function Liker(){
        include('db.php');
        //click event from the client side sending data through ajax
        $value =  $_POST['identification'];
        $post_id = intval($value);
        session_start();
        $name = $_SESSION['NAME'];
        $preventsql = "SELECT name FROM people_who_liked WHERE post_id = '$post_id'";
        $preventdl = $conn->query($preventsql);
        $allNames = $preventdl->fetch(PDO::FETCH_ASSOC);
        if($preventdl->rowcount()>=1){

            $counter_sql = "SELECT likes FROM likes WHERE post_id = '$post_id'";

            $number = $conn->query($counter_sql);
            $array = $number->fetch(PDO::FETCH_ASSOC);
            $counter = $array['likes'];
            --$counter;

            $updatecsql = "UPDATE likes SET likes = '$counter' WHERE post_id = '$post_id'";
            $deletesql = "DELETE FROM people_who_liked WHERE post_id = '$post_id'";
            $conn->exec($updatecsql);
            $conn->exec($deletesql);
        }else{
            //select likes if existing from the likes table if not already 
            //existing initialize it then select it
            $counter_sql = "SELECT likes FROM likes WHERE post_id = '$post_id'";

            $number = $conn->query($counter_sql);
            if($number->rowcount()===0){
                //echo "notin dey ooo ma broda";
                $insert_sql = "INSERT INTO likes (post_id,likes) VALUES ('$post_id','0')";
                $insert = $conn->exec($insert_sql);
            }

            $array = $number->fetch(PDO::FETCH_ASSOC);
            $counter = $array['likes'];
            ++$counter;

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
            //save the names of those that like the post and the id of the post they like
            //the post_id 
        
            $save_sql = "INSERT INTO people_who_liked (post_id,name) VALUES ('$post_id','$name')"; 
            $save = $conn->exec($save_sql);
        }
}
Liker();
?>