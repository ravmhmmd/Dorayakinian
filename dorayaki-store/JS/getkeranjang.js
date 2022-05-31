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
    fetch(`getkeranjang.php?userID=${userID}&token=${token}`)
    .then(res=>res.json())
    .then(res=>{
        var produk = ""
        var total = 0
        if(res.code===200){
            
            res.data.forEach((item,index)=>{
                var subtotal = item.price*item.jumlah
                produk = produk.concat(        
                    `<div class="container-keranjang">
                        <p class="keranjang-nama">${item.name}</p>
                        <table>
                            <tr id="jumlah">
                                <th>Jumlah</th>
                                <th>:</th>
                                <th>${item.jumlah}</th>
                            </tr>
                            <tr class="harga">
                                <th>Subtotal</th>
                                <th>:</th>
                                <th>Rp${subtotal}</th>
                            </tr>
                        </table>
                        <div class="btn-plusminus">
                            <button onClick="addBarang(${item.produkID},${-1},${item.jumlah})" id="min" class="btn-plusminus-btn">-</button>
                            <button onClick="addBarang(${item.produkID},${1},${item.jumlah})" id="plus" class="btn-plusminus-btn">+</button>
                        </div>
                    </div>`                    
                )
                total+=subtotal
            })
            produk =produk.concat(
                `<div class="container-total">
                    <p class="total-text">Total</p>
                    <p class="total-price">Rp${total}</p>
                </div>`
            )
            document.getElementsByClassName("container")[0].innerHTML = produk
        }else{
            window.alert("anda belum login atau sesi anda telah habis silahkan login kembali");
            window.location.href = "index.php"
        }
        
        
    })
}

function addBarang(id,angka,jumlah){
    console.log(`updatekeranjang.php?upd=${angka}&produkID=${id}&token=${token}&userID=${userID}&jumlah=${jumlah}`)
    fetch(`updatekeranjang.php?upd=${angka}&produkID=${id}&token=${token}&userID=${userID}&jumlah=${jumlah}`)
    .then(res=>res.json())
    .then((res)=>{
        if(res.code===200){
            getData()
        }
        else{
            window.alert("anda belum login atau sesi anda telah habis silahkan login kembali");
            window.location.href = "index.php"
        }
        
    })
}

getData()