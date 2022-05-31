<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pusat Dorayaki Berbagai Rasa | Dorayakinian</title>
    <!-- <link rel="stylesheet" href="produk-container.css"> -->
    <link rel="stylesheet" href="../CSS/style-tambahvarian.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/8ae634ed5a.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="header">
        <div class="logo"><a href="dashboardadmin.php">Dorayakinian</a></div>
        <div class="header-right">
            <form id="form" class="search-bar">
                <input class="search-bar-text" type="text" name="search-bar" id="search-bar" placeholder="cari di sini">
                <button class="search-bar-btn" type="submit" name="submit" id="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <a href="tambahvarian.php" class="btn-tambah">
                <i class="fas fa-plus-circle"></i>
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
        <h2>Tambah Varian Dorayaki</h2>
        <form id="form-tambahvarian">
            <p style="padding: 20px;"></p>
            <table>
                <tr>
                    <th><label>Nama Dorayaki</label></th>
                    <th><input type="text" name="nama-dorayaki" class="text" id="nama-dorayaki" required></th>
                </tr>
                <tr>
                    <th><label>Deskripsi</label></th>
                    <th><input type="text" name="desc-dorayaki" class="text" id="desc-dorayaki" required></th>
                </tr>
                <tr>
                    <th><label>Harga</label></th>
                    <th><input type="text" name="harga-dorayaki" class="text" id="harga-dorayaki" required></th>
                </tr>
                <tr>
                    <th><label>Stok</label></th>
                    <th><input type="text" name="stok-dorayaki" class="text" id="stok-dorayaki" required></th>
                </tr>
                <tr>
                    <th><label>URL Foto</label></th>
                    <th><input type="text" name="img-dorayaki" class="text" id="img-dorayaki" required></th>
                </tr>
            </table>
            <p style="padding: 20px;"></p>
            <input type="submit" name="submit" id="submit-tambahvarian" value="Tambah">
            <p style="padding: 10px;"></p>
        </form>
    </div>
</body>
<footer>
    <p style="padding: 7px;"></p>
    <p>©2021 by Dorayakinian</p>
    <p style="padding: 7px;"></p>
</footer>


<script src="../JS/checkcookie.js"></script>
<script src="../JS/getusername.js"></script>
<script src="../JS/menuToggle.js"></script>
<script src="../JS/searchadmin.js"></script>
<script src="../JS/addproduk.js"></script>