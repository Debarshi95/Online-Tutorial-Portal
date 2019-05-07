<?php

include 'Cors.php';

$firstname = $_GET["firstname"];
$lastname = $_GET["lastname"];
$user = $_GET["user"];
$email = $_GET["email"];
$pass = $_GET["pass"];
$pass2 = $_GET["pass2"];
$isTutorChecked = $_GET["isTutorChecked"];

$conn = new mysqli("localhost", "root", "", "ReactPhp");
if ($conn == TRUE) {
    if ($pass == $pass2 && $isTutorChecked == true) {
        $sql = "INSERT INTO tutors(firstname,lastname,user,email,password,password2,isChecked) VALUES
            ('$firstname','$lastname','$user','$email','$pass','$pass2','$isTutorChecked')";
    }
    if ($conn->query($sql) === TRUE) {
        echo "Tutor record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Not Connected";
}
