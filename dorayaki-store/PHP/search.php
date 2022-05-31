<?php
    // $_GET = json_decode(file_get_contents("php://input"), true);
    $offset = ($_GET['page'] -1)*4;
    $search = $_GET['search'];
    
    try{
        $db = new PDO('sqlite:../DB/database.db');
        $search_parsed = explode(" ", $search);
        $search_query = "%";
        foreach($search_parsed as $item){
            $search_query.= $item;
            $search_query.= "%";
        }
        $query =  $db->query("select * from 'produk' where name like '$search_query' or description like '$search_query' order by sales desc limit $offset, 4;")->fetchAll();
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
                    "pesan"=> "list produk gaada",
                    // "tes" => $search_parsed
                ]
            )); 
        }
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>