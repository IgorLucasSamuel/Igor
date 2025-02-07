const API_KEY = "48641350-52988a17241279f8530389bde"; 
        const form = document.getElementById("live-news");
        const liveNews = document.getElementById("football-content");

        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const football = document.querySelector('input[name="football"]:checked').value;
            console.log(football);
            
            const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(football)}&image_type=photo`;

            try {
                const response = await fetch(url);
                const data = await response.json();

               
                if (data.hits && data.hits.length > 0) {
                    displayNews(data.hits);
                } else {
                    liveNews.innerHTML = `<p>Unable to fetch photos. Try again later.</p>`;
                }
            } catch (error) {
                console.error("Error fetching news:", error);
                liveNews.innerHTML = `<p>Error fetching photos. Please check the console for details.</p>`;
            }
        });

       function displayNews(photos) {
        liveNews.innerHTML = ""; 
        photos.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.webformatURL; 
            img.alt = photo.tags; 
            liveNews.appendChild(img);
        });
    }

    // Function to toggle the menu
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active'); 
    }