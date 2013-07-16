<?php
include("../lib/MontyHall.php");
$mh = new MontyHall;
header("Content-Type: application/json");
echo $mh->getDoors();
?>