function getproduct(page){
    fetch(`getproduct.php?page=${page}`)
    .then(res=>res.json())
    .then(res=>{
        var produk = ""
        res.data.forEach((item,index)=>{
            produk = produk.concat(
                    `<a class="box-container" href="detailadmin.php?produkID=${item.produkID}">
                    <div class="box-container-slideimg">
                        <img src="${item.image}">
                    </div>
                    <div class="box-container-slidedetail">
                        <div class="text">
                            <p href="#">${item.name}</p>
                        </div>
                        <p href="#" class="price">Rp${item.price}</p>
                    </div>
                    </a>
                    `
                )
        })
        // document.getElementById('username').innerHTML = getCookie("user")
        // console.log(getCookie("user"))
        document.getElementsByClassName('bungkus')[0].innerHTML = produk
    })
}
// const queryString = window.location.search
// const urlParams = new URLSearchParams(queryString)
// const page = parseInt(urlParams.get('page'))
getproduct(1);