<?php
    $update = $_GET['upd'];
    $produkID = $_GET['produkID'];
    $token = $_GET['token'];    
    
    // var_dump($newest);die();

    try{
        $db = new PDO('sqlite:../DB/database.db');        
        $tokencheck = $db->query("select expired from 'token' where token='$token';")->fetchAll();
        
        if(count($tokencheck)!=0){
            $expired = $tokencheck[0]['expired'];
            if(intval(time())<intval($expired)){
                $query = $db->query("select stock from produk where produkID='$produkID';")->fetchAll();
                $stock = $query[0]['stock']+intval($_GET["upd"]);
                if($stock<0){                                        
                    $db->exec("delete from produk where produkID='$produkID';");                        
                }
                else{
                    $sales = $db->query("select sales from keranjang where userID='$userID' and produkID='$produkID';")->fetchAll()[0];             
                    $salesnewest = intval($sales)+intval($_GET("upd"));
                    $db->exec("update produk set stock='$stock', sales='$sales' where produkID='$produkID';");
                }                                    
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