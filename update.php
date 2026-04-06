<?php
include 'db.php';

$id=$_POST['id'];
$name=$_POST['name'];
$email=$_POST['email'];
$age=$_POST['age'];

$conn->query("UPDATE students SET name='$name',email='$email',age='$age' WHERE id=$id");

header("Location:view.php");
?>