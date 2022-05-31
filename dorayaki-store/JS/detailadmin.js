const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const produkID = parseInt(urlParams.get('produkID'))

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
} 

function getproductbyID(produkID){
    fetch(`getproductbyID.php?produkID=${produkID}`)
    .then(res=>res.json())
    .then(res=>{
        var produk = ""
        // console.log(res.data)
        res.data.forEach((item,index)=>{
            produk = produk.concat(
                    `<a class="list-produk" href="detail.php?produkID=${item.produkID}" style="display:block; color:black;">
                        <div class="box-container">
                            <div class="box-container-slideimg">
                                <img src="${item.image}">
                            </div>
                            <div class="box-container-slidedetail">
                                <div class="text">
                                    <h2>${item.name}</h2>
                                    <p>${item.description}</p>
                                    <p class="price">Rp${item.price}</p>
                                </div>
                                <div class="text-bottom">
                                    <div class="btn-admin">
                                        <button href="ubahstok.php" class="ubah">Ubah</button>
                                        <button href="deleteproduk.php" class="hapus">Hapus</Button>
                                    </div>
                                    <p class="stok">Stok : ${item.stock}</p>
                                </div>
                            </div>
                        </div>
                    </a>`
                )
            
        })
        // document.getElementById('username').innerHTML = getCookie("user")
        // console.log(getCookie("user"))
        document.getElementsByClassName('bungkus')[0].innerHTML = produk
    }).finally(
        ()=>{
            const userID =getCookie("userID")
            const token = getCookie("token")            
            document.getElementsByClassName("ubah")[0].addEventListener("click",(e)=>{
                e.preventDefault()
                fetch("gettoken.php",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        userID: userID,
                        token: token
                    })
                })
                .then(res=>res.json())
                .then(res=>{
                    if(res.code===200){
                        window.location.href = `ubahstok.php?produkID=${produkID}`
                    }
                    else{
                        window.location.href = "index.php"
                    }
                })
            })
            document.getElementsByClassName("hapus")[0].addEventListener("click",(e)=>{
                e.preventDefault()
                if(window.confirm("apakah anda yakin ingin menghapus produk ini?")) {
                    fetch("deleteproduk.php",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                            userID: userID,
                            token: token,
                            produkID:produkID
                        })
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        if(res.code===200){
                            window.location.href = `dashboardadmin.php`
                        }
                        else{
                            window.alert("anda belum login atau sesi anda telah habis silahkan login kembali");
                            window.location.href = "index.php"
                        }
                    })
                }else{
                    console.log("cancel")
                } 
                
            })

        }
    )
}
getproductbyID(produkID)
