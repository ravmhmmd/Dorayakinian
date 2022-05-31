<?php
    $userID = $_GET['userID'];
    $token = $_GET['token'];

    try{
        $db = new PDO('sqlite:../DB/database.db');        
        $tokencheck = $db->query("select expired from 'token' where token='$token';")->fetchAll();
        if(count($tokencheck)!=0){
            $expired = $tokencheck[0]['expired'];
            if(intval(time())<intval($expired)){
                $query =  $db->query("select produkID, name, jumlah, price from 'produk' natural join 'keranjang' where userID='$userID';")->fetchAll();
                if(count($query)!=0){
                    http_response_code(200);
                    echo(json_encode(
                        [
                            "code"=> 200,
                            "pesan"=> "keranjang ada",
                            "data"=> $query
                        ]
                    ));
                }
                else{
                    http_response_code(400);
                    echo(json_encode(
                        [
                            "code"=> 200,
                            "pesan"=> "keranjang kosong",
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
                        "pesan"=> "token expired",
                        "data"=> []
                    ]
                ));
            }

        }else{
            http_response_code(401);
                echo(json_encode(
                    [
                        "code"=> 401,
                        "pesan"=> "token not exist",
                        "data"=> []
                    ]
                ));
        }
        
    }catch(PDOException $e){
        echo $e->getMessage();
    }

?>
