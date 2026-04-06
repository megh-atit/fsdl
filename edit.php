<?php
include 'db.php';

$id=$_GET['id'];
$result=$conn->query("SELECT * FROM students WHERE id=$id");
$row=$result->fetch_assoc();
?>

<!DOCTYPE html>
<html>
<head>
<title>Edit</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark text-white">

<div class="container mt-5">

<div class="card p-4 bg-secondary shadow-lg">
<h3 class="text-center mb-3">Edit Student</h3>

<form method="POST" action="update.php">
<input type="hidden" name="id" value="<?php echo $row['id']; ?>">

<div class="mb-3">
<input type="text" name="name" value="<?php echo $row['name']; ?>" class="form-control">
</div>

<div class="mb-3">
<input type="text" name="email" value="<?php echo $row['email']; ?>" class="form-control">
</div>

<div class="mb-3">
<input type="number" name="age" value="<?php echo $row['age']; ?>" class="form-control">
</div>

<div class="text-center">
<button class="btn btn-success">Update</button>
</div>

</form>

</div>

</div>

</body>
</html>