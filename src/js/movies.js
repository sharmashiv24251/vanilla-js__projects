const fetchData = async (searchTerm) => {
  const response = await axios.get(`https://www.omdbapi.com/`, {
    params: {
      apikey: `69bf0dcb`,
      s: searchTerm,
    },
  });
  console.log(response.data.Search);
  displayMovies(response.data.Search);
  return response.data.Search;
};

const debounce = (fn) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, 200);
  };
};

const displayMovies = (movies) => {
  document.querySelector(".movie__container").innerHTML = "";

  for (const movie of movies) {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add(`movie__card`);
    movieContainer.innerHTML = `   <div class="movie__info">
      <h2 class="movie__title">${movie.Title}</h3>
      <h3 class="movie__year"> ${movie.Year}</h3>
      <button class="IMDB" onclick="window.open('https://www.imdb.com/title/${movie.imdbID}/', '_blank')"> IMDB</button>
      </div>
      <img src="${movie.Poster}" class="movie__poster" alt=""> `;
    document.querySelector(`.movie__container`).appendChild(movieContainer);
  }
};

const onInput = debounce(async (e) => {
  await fetchData(e.target.value);
});

// Perform initial search on page load
window.addEventListener("load", async () => {
  const initialSearchTerm = "TAXI DRIVER";
  await fetchData(initialSearchTerm);
});

// Add event listener to the input for continuous searches
const movieInput = document.querySelector(".movie__search-input");
movieInput.addEventListener("input", onInput);
