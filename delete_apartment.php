<?php
// Get the id of apartment to delete
$id = $_POST['id'];

// Delete the apartment to the corresponding id
require_once('database.php');
$query = "DELETE FROM apartments
          WHERE id = '$id'";
$db->exec($query);

// display manage apartments page
include('manage-apartments.php');
?>