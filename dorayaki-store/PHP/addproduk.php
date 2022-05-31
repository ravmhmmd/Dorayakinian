<?php
$_POST = json_decode(file_get_contents("php://input"), true);

$desc=$_POST['desc'];
$name=$_POST['name'];
$price=$_POST['price'];
$stock=$_POST['stock'];
$image=$_POST['image'];
$token = $_POST['token'];
$userID = $_POST['userID'];
try{        
    $db = new PDO('sqlite:../DB/database.db');
    $tokencheck = $db->query("select expired from 'token' where token='$token';")->fetchAll();
    if(count($tokencheck)!=0){
        $expired = $tokencheck[0]['expired'];
        if(intval(time())<intval($expired)){
            $query = $db->query("select name from 'produk' where name='$name';")->fetchAll();
            if(count($query)==0){   // cek user ada atau tidak
                $db->exec("insert into produk(description,name,price,stock,image) values('$desc','$name','$price','$stock','$image');");
                http_response_code(200);
                echo(json_encode(
                    [
                        "code"=> 200,
                        "pesan"=> "tambah produk berhasil"
                    ]
                ));
            }
            else{
                http_response_code(400);
                echo(json_encode(
                [
                    "code"=> 400,
                    "pesan"=> "tambah produk gagal, produk sudah ada",
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
                    "pesan"=> "token not exist"
                ]
            ));
    }

    
} catch (PDOException $th) {
    echo $e->getMessage();
}  

?>