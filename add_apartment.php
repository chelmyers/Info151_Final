<?php

//Grab apartment information
$neighborhood = $_POST['neighborhood'];
$bedroom = $_POST['bedroom'];
$bathroom = $_POST['bathroom'];
$movedate = $_POST['movedate'];
$rent = $_POST['rent'];
$imagename = $_POST['imagename'];

//Make sure fields are not empty
if (empty($neighborhood) || empty($movedate) || empty($rent) || empty($imagename) ) {
    include('error.php');
} else {
    
    // Add information into database
    require_once('database.php');
    $query = "INSERT INTO apartments
                 (neighborhood, bedroom, bathroom, movedate, rent, imagename)
              VALUES
                 ('$neighborhood', '$bedroom', '$bathroom', '$movedate', '$rent', '$imagename')";
    $db->exec($query);

    //Display page to manage apartments
    include('manage-apartments.php');
}
?>