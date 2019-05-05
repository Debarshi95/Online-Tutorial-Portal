<?php

include 'Cors.php';
$user=$_GET['user'];
$pass=$_GET['pass'];



$conn=new mysqli("localhost","root","","ReactPhp");
if($conn==TRUE){
    $sql="SELECT * from signup where user='$user' && password='$pass'";
     $result=$conn->query($sql);
      if($result->num_rows>0){
        while($row=$result->fetch_assoc()){
            $loginres=array(
               "id"=>$row["id"],
               "Name"=>$row["user"],
                "Pass"=>$row["password"]
                );
            echo json_encode($loginres);
        }
    }     
    else
    {
     echo "Not matched	";

    }
}
else{
    echo "Not Connected";
}

mysqli_close($conn);
