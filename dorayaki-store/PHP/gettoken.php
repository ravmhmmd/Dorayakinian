<?php
    $_POST = json_decode(file_get_contents("php://input"), true);
    try{
        $token = $_POST['token'];
        $db = new PDO('sqlite:../DB/database.db');
        $query = $db->query("select expired from 'token' where token='$token';")->fetchAll();
        if(count($query)!=0){
            $expired = $query[0]['expired'];
            if(intval(time())<intval($expired)){
                http_response_code(200);
                echo(json_encode(
                    [
                        "code"=> 200,
                        "pesan"=> "belum expired"
                    ]
                ));
            }
            else{
                http_response_code(400);
                echo(json_encode(
                    [
                        "code"=> 400,
                        "pesan"=> "udah expired"
                    ]
                ));
            }
        }
        else{
            http_response_code(400);
            echo(json_encode(
                [
                    "code"=> 400,
                    "pesan"=> "token ga valid"
                ]
            ));
        }
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
    
?>