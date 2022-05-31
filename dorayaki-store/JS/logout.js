function get_cookie(name){
    return document.cookie.split(';').some(c => {
        return c.trim().startsWith(name + '=');
    });
}
document.getElementById("logout").addEventListener("click",(e)=>{
    e.preventDefault()
    document.cookie = `token=${get_cookie("token")}; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    document.cookie = `user=${get_cookie("user")}; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    document.cookie = `userID=${get_cookie("userID")}; expires=Thu, 01 Jan 1970 00:00:00 UTC`
    console.log("keluar yey")
    window.location.href = "index.php"
})