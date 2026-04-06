<?php
include 'db.php';

$name=$_POST['name'];
$email=$_POST['email'];
$age=$_POST['age'];

if(empty($name)||empty($email)||empty($age)){
echo "All fields required";
}
elseif(!filter_var($email,FILTER_VALIDATE_EMAIL)){
echo "Invalid email";
}
else{
$sql="INSERT INTO students(name,email,age) VALUES('$name','$email','$age')";
if($conn->query($sql)){
echo "Data Inserted <a href='index.php'>Go Back</a>";
}else{
echo "Error";
}
}
?>