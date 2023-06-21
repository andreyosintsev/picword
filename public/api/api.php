<?php

$json1 = '{    
  "task": [
    "0", "0", "1", "0", "0", "0", "0", "1", "0",
    "0", "1", "0", "1", "0", "0", "1", "0", "1",
    "1", "1", "1", "1", "1", "0", "1", "0", "1",
    "1", "0", "0", "0", "1", "0", "0", "1", "0",
    "1", "0", "0", "0", "1", "0", "0", "1", "0",
    "1", "1", "1", "1", "1", "0", "0", "1", "0"
  ],
  "width": 9,
  "height": 6,
  "success": "true"
}';

$json2 = '{
  "task": [
    "0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
    "0","1","1","1","1","1","0","1","1","1","1","1","0","1","1","0",
    "0","1","1","1","1","1","0","1","1","1","1","1","0","1","1","0",
    "0","0","0","0","1","1","0","1","1","0","0","0","0","1","1","0",
    "0","0","0","0","1","1","0","1","1","1","1","1","0","1","1","0",
    "0","0","0","0","1","1","0","1","1","1","1","1","0","1","1","0",
    "0","0","0","0","1","1","0","0","0","0","1","1","0","0","0","0",
    "0","1","1","1","0","0","0","1","1","1","1","1","0","1","1","0",
    "0","1","1","1","0","0","0","1","1","1","1","1","0","1","1","0",
    "0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"
  ],
  "width": 16,
  "height": 10,
  "success": "true"
}';

if (rand(1, 2) == 1) {
  $json = $json1;
} else {
  $json = $json2;
}

header('Content-Type: application/json');
echo $json;
exit();