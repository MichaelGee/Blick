<?php
include('db.php');

$datasql = "SELECT * FROM proposals";
$result = $conn->query($datasql);
$result_array = $result->fetchAll(PDO::FETCH_ASSOC);
?>
<ul id="content">
<?php foreach ($result_array as $info){
?>

    <li class="card-panel"><h2><?php echo $info['name']?></h2><br><?php echo $info['post']?></li>
<?php }?>
</ul>