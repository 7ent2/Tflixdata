// Get movie title from URL
const params = new URLSearchParams(window.location.search);
const movieTitle = params.get("title");

// Fetch movie data from JSON
fetch("movies.json")
  .then(response => response.json())
  .then(movies => {
      let movie = movies.find(m => m.title === movieTitle);
      if (movie) {
          document.getElementById("movie-poster").src = "images/" + movie.image;
          document.getElementById("movie-title").textContent = movie.title;
          document.getElementById("movie-description").textContent = movie.description;
          document.getElementById("watch-link").href = movie.link;
      } else {
          document.body.innerHTML = "<h1>Movie Not Found</h1>";
      }
  });
