<?php 
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register | Dorayakinian</title>
    <link rel="stylesheet" href="../CSS/style-login.css">
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="header">
        <a href="index.php" style="text-align:center; display: block;font-size: 3rem; font-weight: bolder; color:black">Dorayakinian</a>
    </div>
    <div class="container">
        <div class="centerform-reg">
            <form id="form">
                <h2>Registrasi</h2>
                <div class="txt_field">
                    <input type="text" name="name" class="text" autocomplete="off" id="name" required>
                    <span></span>
                    <label>Nama Lengkap</label>
                </div>
                <div class="txt_field">
                    <input type="text" name="email" class="text" autocomplete="off" id="email" required>
                    <span></span>
                    <label>Email</label>
                </div>
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
                <div class="txt_field">
                    <input type="password" name="pass_confirm" class="text" id="pass_confirm" required>
                    <span></span>
                    <label>Konfirmasi Kata Sandi</label>
                </div>
                <input type="submit" name="submit" id="submit" value="Daftar">
                <div style="padding-top: 40px; text-align:center;">
                    <p style="display: inline-block;">Sudah punya akun?</p>
                    <a href="login.php" class="hplink">Masuk</a>
                </div>
            </form>
        </div>
    </div>
    <p style="padding: 400px;"></p>
</body>
<footer>
    <p style="padding: 7px;"></p>
    <p>©2021 by Dorayakinian</p>
    <p style="padding: 7px;"></p>
</footer>

<script>
    //fungsi untuk validasi username
    function isUserNameValid(username) {
    /* 
        Usernames can only have: 
        - Lowercase Letters (a-z) 
        - Numbers (0-9)
        - Underscores (_)
    */
        const res = /^[a-zA-Z0-9_]+$/.exec(username);
        const valid = !!res;
        return valid;
    }

    //fungsi untuk validasi email
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    document.getElementById("form").addEventListener("submit",(e)=>{
        e.preventDefault()
        let user = document.getElementsByName("user")[0].value
        let pass = document.getElementsByName("pass")[0].value
        let pass_confirm = document.getElementsByName("pass_confirm")[0].value
        let email = document.getElementsByName("email")[0].value
        let name = document.getElementsByName("name")[0].value        
        let error = false

        //validasi password dengan konfirmasi
        if(pass!=pass_confirm){
            error = true;
            window.alert("password harus sama dengan konfirmasi password");
        }

        //validasi username
        if(!isUserNameValid(user)){
            error=true;
            window.alert("format username hanya boleh diisi dengan alphanumeric dan underscores saja");
            //isi style
        }

        //validasi email
        if(!validateEmail(email)){
            error=true;
            window.alert("format email salah");
            //isi style
        }

        console.log(error);
        
        if(!error){
            fetch("registerbackend.php",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    user: user,
                    pass: pass,
                    name: name,
                    email: email
                })
            }).then(res=>res.json())
            .then(
                res=>{
                    if(res.code===200){
                        console.log("BERHASIL")
                        window.location.href = "Login.php";
                    }else{
                        window.alert("user sudah tersedia");
                    }
                }
            )
        }
    })
</script>
</html>