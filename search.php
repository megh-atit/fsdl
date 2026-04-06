<?php
include 'db.php';
?>

<!DOCTYPE html>
<html>
<head>
<title>Search</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark text-white">

<div class="container mt-5">

<h2 class="text-center mb-4">Search Student</h2>

<form method="POST" class="d-flex mb-4">
<input type="text" name="search" class="form-control me-2">
<button class="btn btn-warning">Search</button>
</form>

<table class="table table-dark table-bordered text-center">
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Age</th>
</tr>

<?php
if(isset($_POST['search'])){
$search=$_POST['search'];

$result=$conn->query("SELECT * FROM students WHERE name LIKE '%$search%'");

while($row=$result->fetch_assoc()){
echo "<tr>";
echo "<td>".$row['id']."</td>";
echo "<td>".$row['name']."</td>";
echo "<td>".$row['email']."</td>";
echo "<td>".$row['age']."</td>";
echo "</tr>";
}
}
?>

</table>

<div class="text-center">
<a href="index.php" class="btn btn-light">Back</a>
</div>

</div>

</body>
</html>