<?php

include 'Cors.php';



    $firstname = $_GET["firstname"];
    $lastname = $_GET["lastname"];
    $user = $_GET["user"];
    $email = $_GET["email"];
    $pass = $_GET["pass"];
    $pass2 = $_GET["pass2"];
    $login = $_GET["login"];
    
    $conn=new mysqli("localhost","root","","ReactPhp");
    if($conn==TRUE){
        echo "Connected";
    }
    else{
        echo "Not Connected";
    }
    if($pass=$pass2){
    $sql="INSERT INTO Signup(firstname,lastname,user,email,password,password2,login) VALUES
    ('$firstname','$lastname','$user','$email','$pass','$pass2','$login')";
    }
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
