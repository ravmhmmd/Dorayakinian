<?php
    $_POST = json_decode(file_get_contents("php://input"), true);

    $userID = $_POST['userID'];
    $produkID = $_POST['produkID'];
    $token = $_POST['token'];

    try{
        $db = new PDO('sqlite:../DB/database.db');        
        $tokencheck = $db->query("select expired from 'token' where token='$token';")->fetchAll();
        
        if(count($tokencheck)!=0){
            $expired = $tokencheck[0]['expired'];
            if(intval(time())<intval($expired)){
                $db->exec("delete from produk where produkID='$produkID';");
                http_response_code(200);
                echo(json_encode(
                    [
                        "code"=> 200,
                        "pesan"=> "keranjang berhasil update",
                    ]
                ));
            }else{
                http_response_code(400);
                echo(json_encode(
                    [
                        "code"=> 400,
                        "pesan"=> "token expired",
                    ]
                ));
            }

        }else{
            http_response_code(402);
            echo(json_encode(
                [
                    "code"=> 402,
                    "pesan"=> "token not exist"
                ]
            ));
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>