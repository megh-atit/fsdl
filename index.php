<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<!DOCTYPE html>
<html>
<head>
<title>Student Management</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark text-white">

<div class="container mt-5">

<div class="card p-4 shadow-lg bg-secondary">
<h2 class="text-center mb-4">Student Management System</h2>

<form method="POST" action="insert.php">
<div class="mb-3">
<label>Name</label>
<input type="text" name="name" class="form-control">
</div>

<div class="mb-3">
<label>Email</label>
<input type="text" name="email" class="form-control">
</div>

<div class="mb-3">
<label>Age</label>
<input type="number" name="age" class="form-control">
</div>

<div class="text-center">
<button class="btn btn-success">Add Student</button>
</div>
</form>

<hr>

<div class="text-center">
<a href="view.php" class="btn btn-primary">View Records</a>
<a href="search.php" class="btn btn-warning">Search</a>
</div>

</div>

</div>

</body>
</html>