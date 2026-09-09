<?php

$host = "localhost";
$user = "root";
$password = "root";
$database = "banco_exemplo";


$conn = new mysqli($host, $user, $password, $database);

if($conn-> connect_error){
   die ("Erro na conexão:" . $conn-> connect_error);
};

?>