<?php
    // $_GET = json_decode(file_get_contents("php://input"), true);
    $offset = $_GET['page'] -1;
    try{
        $db = new PDO('sqlite:../DB/database.db');
        $query =  $db->query("select * from 'produk' order by sales desc limit $offset, 4;")->fetchAll();
        // var_dump($query);
        if(count($query)!=0){            
            http_response_code(200);
            echo(json_encode(
                [
                    "code"=> 200,
                    "pesan"=> "list produk ada",
                    "data" => $query
                ]
            ));
        }
        else{
            http_response_code(400);
            echo(json_encode(
                [
                    "code"=> 400,
                    "pesan"=> "list produk gaada"
                ]
            )); 
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>