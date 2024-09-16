function search() {
    const query = document.getElementById("searchInput").value;
    if (query) {
        alert("Searching for: " + query);
        // Perform search operation here (for demonstration, just showing alert)
    } else {
        alert("Please enter a search term");
    }
}
