<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pusat Dorayaki Berbagai Rasa | Dorayakinian</title>
    <!-- <link rel="stylesheet" href="produk-container.css"> -->
    <link rel="stylesheet" href="../CSS/style-dashboard.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/8ae634ed5a.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="header">
        <div class="logo"><a href="dashboard.php">Dorayakinian</a></div>
        <div class="header-right">
            <form id="form" class="search-bar">
                <input class="search-bar-text" type="text" name="search-bar" id="search-bar" placeholder="cari di sini">
                <button class="search-bar-btn" type="submit" name="submit" id="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <a href="keranjang.php" class="btn-keranjang">
                <i class="fas fa-shopping-basket"></i>
            </a>
            <div class="profile">
                <div class="btn-profile" onclick="menuToggle();">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="menu-profile">
                    <ul>
                        <li>
                            <i class="fas fa-user"></i>
                            <p style="display:inline" id="username"></p>
                        </li>
                        <li>
                            <i class="fas fa-power-off"></i>
                            <a id="logout" href="index.php">log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="web-content">
        <h2>Paling Laku di Dorayakinian</h2>
        <!-- bang bin -->
        <div style="display:none" class="container">
            <div class="produk"></div>        
        </div>
        <!-- cubs -->
        <div class="bungkus">
            <!-- <div class="box-container">
                <div class="box-container-slideimg">
                    <img src="../img/produk/dorayakan.jpg">
                </div>
                <div class="box-container-slidedetail">
                    <div class="text">
                        <a href="#">Dorayakan</a>
                    </div>
                    <a href="#" class="price">Rp3,000</a>
                </div>
            </div> -->
        </div>
    </div>
    <p style="padding: 25px;"></p>
</body>
<footer>
    <p style="padding: 7px;"></p>
    <p>©2021 by Dorayakinian</p>
    <p style="padding: 7px;"></p>
</footer>



<script src="../JS/checkcookie.js"></script>
<script src="../JS/getusername.js"></script>
<script src="../JS/getproduct.js"></script>
<script src="../JS/search.js"></script>
<script src="../JS/logout.js"></script>
<script src="../JS/menuToggle.js"></script>