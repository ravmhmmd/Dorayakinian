<?php
$_POST = json_decode(file_get_contents("php://input"), true);
if(isset($_POST['user']) && isset($_POST['pass']) && isset($_POST['name']) && isset($_POST['email'])){
    $username=$_POST['user'];
    $name=$_POST['name'];
    $email=$_POST['email'];
    $pass=$_POST['pass'];
    try {
        $db = new PDO('sqlite:../DB/database.db');
        $query = $db->query("select userID from 'user' where username='$username';")->fetchAll();
        if(count($query)==0){   // cek user ada atau tidak
            $pass = password_hash($pass, PASSWORD_DEFAULT);
            $db->exec("insert into user(username,name,email,status_admin, password) values('$username','$name','$email',0,'$pass');");
            http_response_code(200);
            echo(json_encode(
                [
                    "code"=> 200,
                    "pesan"=> "registrasi berhasil"
                ]
            ));
        }
        else{
            http_response_code(400);
            echo(json_encode(
            [
                "code"=> 400,
                "pesan"=> "user udah ada",
            ]
            ));
        }
    
        
    } catch (PDOException $th) {
        echo $e->getMessage();
    }  
}
?>