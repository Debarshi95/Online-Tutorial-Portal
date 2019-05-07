<?php
include "Cors.php";

$title = $_GET['title'];
$content = $_GET['content'];

$conn = new mysqli('localhost', 'root', '', 'ReactPhp');
if ($conn == TRUE) {
    $sql = "INSERT INTO adminposts(title,content)VALUES('$title','$content')";
}
if ($conn->query($sql) == TRUE) {
    echo "record created";
} else {
    echo "There is some error" . $conn->error;
}
mysqli_close($conn);
