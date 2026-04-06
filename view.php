<?php
include 'db.php';
?>

<!DOCTYPE html>
<html>
<head>
<title>View Students</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-dark text-white">

<div class="container mt-5">

<h2 class="text-center mb-4">Student Records</h2>

<table class="table table-dark table-bordered text-center">
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Age</th>
<th>Actions</th>
</tr>

<?php
$result=$conn->query("SELECT * FROM students");

while($row=$result->fetch_assoc()){
echo "<tr>";
echo "<td>".$row['id']."</td>";
echo "<td>".$row['name']."</td>";
echo "<td>".$row['email']."</td>";
echo "<td>".$row['age']."</td>";
echo "<td>
<a href='edit.php?id=".$row['id']."' class='btn btn-warning btn-sm'>Edit</a>
<a href='delete.php?id=".$row['id']."' class='btn btn-danger btn-sm'>Delete</a>
</td>";
echo "</tr>";
}
?>

</table>

<div class="text-center">
<a href="index.php" class="btn btn-light">Back</a>
</div>

</div>

</body>
</html>