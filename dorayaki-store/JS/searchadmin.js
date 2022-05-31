document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let search = document.getElementById("search-bar").value
    window.location.href = `hasilpencarianadmin.php?page=1&search=${search}`
})