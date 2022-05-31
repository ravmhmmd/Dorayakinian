<?php
$_POST = json_decode(file_get_contents("php://input"), true);

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

// var_dump($_POST);die();
if(isset($_POST['user']) && isset($_POST['pass'])){
    $username=$_POST['user'];
    $pass=$_POST['pass'];
    try {
        $db = new PDO('sqlite:../DB/database.db');
        $res = $db->query("select userID, password, status_admin from 'user' where username='$username';")->fetchAll();
        $count = count($res);        
        if($count>0){   // cek user ada atau tidak
            if(password_verify($pass, $res[0]['password'])){
                $userID = $res[0]['userID'];
                $status = $res[0]['status_admin'];
                $token = generateRandomString(50);
                $expired=strtotime("+1 week");
                $db->query("insert into token(userID, token, expired) values('$userID', '$token', '$expired');");
                http_response_code(200);
                echo(json_encode(
                    [
                        "code"=> 200,
                        "pesan"=> "user ada",
                        "data"=>[
                            "token"=>$token,
                            "expired"=>$expired,
                            "status"=> $status,
                            "userID"=> $userID
                        ]
                    ]
                ));
            }else{
                http_response_code(400);
                echo(json_encode(
                    [
                        "code"=> 400,
                        "pesan"=> "Username / Password Salah"
                    ]
                )); 
            }
        }
        else{
            http_response_code(400);
            echo(json_encode(
                [
                    "code"=> 400,
                    "pesan"=> "user tidak ada"
                ]
            ));
        }
    } catch (PDOException $e) {
        echo $e->getMessage();
    }  

}