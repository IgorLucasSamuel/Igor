const API_KEY = "VBwCnqGGLL4ty4cD2ezNoEkoc0YWEgHrg5GtRgza";
const form = document.getElementById("live-news");
const liveNews = document.getElementById("football-content");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const football = document.querySelector('input[name="football"]:checked').value;
    console.log(football);
    const url = `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01=${country}&api_key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "ok") {
            displayNews(data.photos);
        } else {
            liveNews.innerHTML = `<p>Unable to fetch photos. Try again later.</p>`;
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        liveNews.innerHTML = `<p>Error fetching photos. Please check the console for details.</p>`;
    }
})

function displayNews(photos) {
    liveNews.innerHTML = ""; // Clear previous news

    if (articles.length === 0) {
        newsContainer.innerHTML = "<p>No photos available for the selected country.</p>";
        return;
    }

}


function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}