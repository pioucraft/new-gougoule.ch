function bigSearch() {
    let searchQuery = document.getElementById("bigSearch").value
    document.getElementById("bigSearch").value = ""
    location.href = `https://www.google.com/search?q=${searchQuery}`
}