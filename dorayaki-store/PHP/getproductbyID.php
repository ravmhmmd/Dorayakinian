<?php
    // $_GET = json_decode(file_get_contents("php://input"), true);
    $produkID = $_GET['produkID'];
    try{
        $db = new PDO('sqlite:../DB/database.db');
        $query =  $db->query("select * from 'produk' where produkID=$produkID;")->fetchAll();
        // var_dump($query);
        if(count($query)!=0){            
            http_response_code(200);
            echo(json_encode(
                [
                    "code"=> 200,
                    "pesan"=> "produk ada",
                    "data" => $query
                ]
            ));
        }
        else{
            http_response_code(400);
            echo(json_encode(
                [
                    "code"=> 400,
                    "pesan"=> "produk gaada"
                ]
            )); 
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>