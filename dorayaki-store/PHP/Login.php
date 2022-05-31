<?php 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Dorayakinian</title>
    <link rel="stylesheet" href="../CSS/style-login.css">
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="header">
        <a style="text-align:center; display: block;font-size: 3rem; font-weight: bolder; color:black" href="index.php">Dorayakinian</a>
    </div>
    <div class="container">
        <div class="centerform">
            <form id="form">
                <h2>Masuk</h2>
                <div class="txt_field">
                    <input type="text" name="user" class="text" autocomplete="off" id="user" required>
                    <span></span>
                    <label>Nama Pengguna</label>
                </div>
                <div class="txt_field">
                    <input type="password" name="pass" class="text" id="pass" required>
                    <span></span>
                    <label>Kata Sandi</label>
                </div>
                <input type="submit" name="submit" id="submit" value="Masuk">
            </form>
            <div style="padding-top: 40px; text-align:center;">
                    <p style="display: inline-block;">Belum punya akun?</p>
                    <a href="register.php" class="hplink">Daftar</a>
                </div>
        </div>
    </div>
    <p style="padding: 279px;"></p>
</body>
<footer>
    <p style="padding: 7px;"></p>
    <p>©2021 by Dorayakinian</p>
    <p style="padding: 7px;"></p>
</footer>

<script>
    document.getElementById("form").addEventListener("submit",(e)=>{
        e.preventDefault()
        let nama = document.getElementsByName("user")[0].value
        let pass = document.getElementsByName("pass")[0].value
        let error = false

        // validasi
        if(pass.length===0||nama.length===0){
            error = true
            //cubing
        }
        
        if(!error){
            fetch("loginbackend.php",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    user: nama,
                    pass: pass
                })
            }).then(res=>res.json())
            .then(
                res=>{
                    if(res.code===200){
                        console.log("BERHASIL")
                        expired = new Date(parseInt(res.data.expired)*1000)
                        document.cookie = `token=${res.data.token}; expires=${expired.toUTCString()}`
                        document.cookie = `user=${nama}; expires=${expired.toUTCString()}`
                        document.cookie = `userID=${res.data.userID}; expires=${expired.toUTCString()}`
                        if(res.data.status==0){
                            window.location.href = "dashboard.php";
                        }
                        else{
                            window.location.href = "dashboardadmin.php";
                        }
                    }else{
                        window.alert("username atau password salah");                        
                    }
                }
            )
        }
    })
</script>

</html>