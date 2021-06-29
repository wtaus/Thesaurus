<?php

$contents = file_get_contents("terms.csv");


$arr = explode("\n", $contents);

$arr = array_map('strtolower', $arr);

print json_encode($arr);
