<?php
    $_POST = json_decode(file_get_contents("php://input"), true);
    $produkID = $_POST['produkID'];
    $token = $_POST['token'];
    $userID = $_POST['userID'];
    try{        
        $db = new PDO('sqlite:../DB/database.db');
        $tokencheck = $db->query("select expired from 'token' where token='$token';")->fetchAll();
        if(count($tokencheck)!=0){
            $expired = $tokencheck[0]['expired'];
            if(intval(time())<intval($expired)){
                $query =  $db->query("select userID, produkID, jumlah from 'produk' natural join keranjang where produkID='$produkID' and userID='$userID';")->fetchAll();
                $stok = $db->query("select stock from produk where produkID='$produkID';")->fetchAll()[0]['stock'];
                if(count($query)==0){
                    $db->exec("insert into keranjang(userID, produkID, jumlah) values('$userID', '$produkID', 1);");
                    http_response_code(200);
                    echo(json_encode(
                        [
                            "code"=> 200,
                            "pesan"=> "tambah keranjang berhasil"
                        ]
                    ));
                }
                else{
                    $jumlah = $query[0]['jumlah']+1;
                    $db->exec("update keranjang set jumlah='$jumlah' where userID='$userID' and produkID='$produkID';");
                    http_response_code(200);
                    echo(json_encode(
                        [
                            "code"=> 200,
                            "pesan"=> "update keranjang berhasil"
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