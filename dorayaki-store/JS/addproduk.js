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
token = getCookie('token')
userID = getCookie('userID')
document.getElementById("form-tambahvarian").addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = document.getElementsByName("nama-dorayaki")[0].value
    let desc = document.getElementsByName("desc-dorayaki")[0].value
    let price = document.getElementsByName("harga-dorayaki")[0].value
    let stock = document.getElementsByName("stok-dorayaki")[0].value
    let image = document.getElementsByName("img-dorayaki")[0].value 

    fetch("addproduk.php",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name: name,
            desc: desc,
            price: price,
            stock: stock,
            image: image,
            token: token,
            userID: userID
        })
    }).then(res=>res.json())
    .then(
        res=>{
            if(res.code===200){
                console.log("BERHASIL")
            }else if(res.code===400){
                console.log("GAGAL")
            }else{
                window.alert("anda belum login atau sesi anda telah habis silahkan login kembali");
                window.location.href("index.php");    
            }
        }
    )
})