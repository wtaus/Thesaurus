<?php

$contents = file_get_contents("terms2.csv");


$arr = explode("\n", $contents);

$new = array();

function cube($n)
{
    $parts = explode(",", $n, 2);

    $object = new stdClass();
    $object->term = $parts[0];

    if(!isset($parts[1]))
    {
    	//var_dump($parts);
    	//exit();
    	return false;
    }

    $object->definition = $parts[1];

    return $object;

}


$arr = array_map('cube', $arr);

// print "<pre>";
// print_r($arr);
// print "</pre>";
//print json_encode($arr);


$new = new stdClass();

foreach($arr as $a)
{
	if(!isset($a->term)) continue;
	$new->{strtolower(trim($a->term))} = $a;
}

// print "<pre>";
// print_r($new);
// print "</pre>";

print json_encode($new);
