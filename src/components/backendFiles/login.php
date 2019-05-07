<?php

include 'Cors.php';

$user = $_GET['username'];
$pass = $_GET['userpass'];
$isLogged = $_GET['isLoggedIn'];

$conn = new mysqli("localhost", "root", "", "ReactPhp");
if ($conn == TRUE) {
    if ($isLogged == 1) {
        $sql = "SELECT uid, user,password from users where user='$user' && password='$pass'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $loginres = array(
                    "id" => $row["uid"],
                    "Name" => $row["user"],
                    "Pass" => $row["password"]
                );
                echo json_encode($loginres);
            }
        }
    } else if ($isLogged == 0) {
        $sql = "SELECT tid, user,password from tutors where user='$user' && password='$pass'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $loginres = array(
                    "id" => $row["tid"],
                    "Name" => $row["user"],
                    "Pass" => $row["password"]
                );
                echo json_encode($loginres);
            }
        }
    } else {
        echo "Not Connected to database <br>" . $conn->error;
    }
} else {
    echo "Not Connected";
}

mysqli_close($conn);
