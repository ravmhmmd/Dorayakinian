const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const page = parseInt(urlParams.get('page'))
const search = urlParams.get('search')

function getsearchproduct(page,search){
    fetch(`search.php?page=${page}&search=${search}`)
    .then(res=>res.json())
    .then(res=>{
        var produk = ""
        console.log(res.data)
        res.data.forEach((item,index)=>{
            produk = produk.concat(
                    `<a class="box-container" href="detail.php?produkID=${item.produkID}">
                    <div class="box-container-slideimg">
                        <img src="${item.image}">
                    </div>
                    <div class="box-container-slidedetail">
                        <div class="text">
                            <p href="#">${item.name}</p>
                        </div>
                        <p href="#" class="price">Rp${item.price}</p>
                    </div>
                    </a>`
                )
            
        })
        // document.getElementById('username').innerHTML = getCookie("user")
        // console.log(getCookie("user"))
        document.getElementsByClassName('bungkus')[0].innerHTML = produk
        document.getElementsByClassName('pagination-pagenum')[0].innerHTML = page
    })
}
function cekpage(){
    const left = document.getElementById('left')
    const right = document.getElementById('right')

    if(page==1){
        left.style.display = "none"
    }else{
        left.style.display = "block"
    }
}

cekpage()

function prevpage(){
    window.location.href = `?page=${page-1}&search=${search}`
}

function nextpage(){
    window.location.href = `?page=${page+1}&search=${search}`
}


getsearchproduct(page,search)