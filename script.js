document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movie-list');
    const searchInput = document.getElementById('searchInput');

    // Sample movie data
    const movies = [
        { title: 'Titanic', description: 'This is movie 1', image: 'img1.jpg' },
        { title: 'Manchester united', description: 'This is movie 2', image: 'img1.jpg' },
        { title: 'Chelsea', description: 'This is movie 3', image: 'img1.jpg' }
    ];

    // Function to create movie cards
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const img = document.createElement('img');
        img.src = 'images/' + movie.image;
        img.alt = movie.title;

        const info = document.createElement('div');
        info.classList.add('movie-info');

        const title = document.createElement('h2');
        title.classList.add('movie-title');
        title.textContent = movie.title;

        const description = document.createElement('p');
        description.classList.add('movie-description');
        description.textContent = movie.description;

        info.appendChild(title);
        info.appendChild(description);

        card.appendChild(img);
        card.appendChild(info);

        return card;
    }

    // Populate movie list
    function populateMovieList(moviesArray) {
        movieList.innerHTML = '';
        moviesArray.forEach(movie => {
            const movieCard = createMovieCard(movie);
            movieList.appendChild(movieCard);
        });
    }

    // Search movies
    function searchMovies() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.description.toLowerCase().includes(searchTerm)
        );
        populateMovieList(filteredMovies);
    }

    // Initial population of movie list
    populateMovieList(movies);
});


//for ratings and reviews 

// Open review modal
function openModal() {
    const modal = document.getElementById('reviewModal');
    modal.style.display = 'block';
}

// Close review modal
function closeModal() {
    const modal = document.getElementById('reviewModal');
    modal.style.display = 'none';
}

// Submit review
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const reviewName = document.getElementById('reviewName').value;
    const reviewRating = document.getElementById('reviewRating').value;
    const reviewComment = document.getElementById('reviewComment').value;

    // Here you can handle the submission of the review data, such as sending it to a server or storing it locally
    console.log('Review submitted:');
    console.log('Name:', reviewName);
    console.log('Rating:', reviewRating);
    console.log('Comment:', reviewComment);

    // Close the modal after submission
    closeModal();
});



// Function to open review modal after 3 seconds
function openReviewModalDelayed() {
    setTimeout(function() {
        openModal(); // Open the review modal
    }, 10000); // 3000 milliseconds = 3 seconds
}

// Call the function to open the modal after 3 seconds
openReviewModalDelayed();



// Function to share on Facebook
function shareOnFacebook() {
    // Replace URL with your website URL
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
}

// Function to share on Twitter
function shareOnTwitter() {
    // Replace URL with your website URL and text with your desired tweet text
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=Check%20out%20this%20awesome%20movie%20website!', '_blank');
}

// Function to share on Instagram
function shareOnInstagram() {
    // Replace URL with your website URL and text with your desired caption text
    // Instagram doesn't allow direct sharing, so this will just open the Instagram website with your caption pre-filled
    window.open('https://www.instagram.com/?url=' + encodeURIComponent(window.location.href) + '&caption=Check%20out%20this%20awesome%20movie%20website!', '_blank');
}


