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

userID = getCookie('userID')
token = getCookie('token')

function getData(){
    fetch(`ubahstokbackend.php?userID=${userID}&token=${token}&produkID=${produkID}`)
    .then(res=>res.json())
    .then(res=>{
        var produk = ""
        var total = 0
        if(res.code===200){
            res.data.forEach((item,index)=>{
                produk = produk.concat(         
                    `<div class="box-container">
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
                                <p style="padding:10px;"></p>
                                <p class="stok">Request penambahan stok</p>
                                <div class="btn-admin">
                                    <button onClick="addBarang(${item.produkID},${-1},${item.jumlah})" id="min" class="ubah">-</button>
                                    <button onClick="addBarang(${item.produkID},${1},${item.jumlah})" id="plus" class="hapus">+</button>
                                </div>
                                <p class="stok">Stok yang ingin ditambah : ${item.stock}</p>
                                <button onClick="" id="make_request" class="ubah">Request ke Pabrik</button>
                            </div>
                        </div>
                    </div>`                 
                )
            })   
            // console.log(produk)         
            document.getElementsByClassName("bungkus")[0].innerHTML = produk
        }else{
            window.location.href = "index.php"
        }
        
        
    })
}

function addBarang(id,angka,jumlah){
    console.log(`updatebackend.php?upd=${angka}&produkID=${id}&token=${token}&userID=${userID}&jumlah=${jumlah}`)
    fetch(`updatebackend.php?upd=${angka}&produkID=${id}&token=${token}&userID=${userID}&jumlah=${jumlah}`)
    .then(res=>res.json())
    .then((res)=>{
        if(res.code===200){
            getData()
        }
        else{
            window.location.href = "index.php"
        }
        
    })
}

getData()