<?php
    $userID = $_GET['userID'];
    $token = $_GET['token'];
    $produkID = $_GET['produkID'];

    try{
        $db = new PDO('sqlite:../DB/database.db');        
        $tokencheck = $db->query("select expired from 'token' where token='$token';")->fetchAll();
        if(count($tokencheck)!=0){
            $expired = $tokencheck[0]['expired'];
            if(intval(time())<intval($expired)){
                $query =  $db->query("select * from 'produk' where produkID='$produkID';")->fetchAll();
                // var_dump($query);
                if(count($query)!=0){
                    http_response_code(200);
                    echo(json_encode(
                        [
                            "code"=> 200,
                            "pesan"=> "produk ada",
                            "data"=> $query
                        ]
                    ));
                }
                else{
                    http_response_code(400);
                    echo(json_encode(
                        [
                            "code"=> 400,
                            "pesan"=> "produk kosong",
                            "data"=> []
                        ]
                    ));
                }
            }
            else{
                http_response_code(401);
                echo(json_encode(
                    [
                        "code"=> 401,
                        "pesan"=> "token expired"
                    ]
                ));
            }

        }else{
            http_response_code(401);
            echo(json_encode(
                [
                    "code"=> 401,
                    "pesan"=> "token expired"
                ]
            ));
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }

?>
