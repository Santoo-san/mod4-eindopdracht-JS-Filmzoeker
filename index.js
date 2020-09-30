console.log("Beginning");

// Dom Manipulation
const addMoviesToDom = (filteredMovies) => {
  const list = document.getElementById("filmList");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  let filteredPosters = filteredMovies.map((A) => A.Poster);
  let filteredImdbIds = filteredMovies.map((movieTitle) => movieTitle.imdbID);
  filteredMovies.forEach((y) => {
    const listItem = document.createElement("li");
    const aTag = document.createElement("a");
    const listImg = document.createElement("IMG");
    listItem.className = "listItem";
    aTag.className = "imdblink";
    aTag.id = "imdblink" + y.imdbID;
    aTag.href = "https://www.imdb.com/title/" + y.imdbID;
    aTag.target = "_blank";
    listImg.src = y.Poster;
    aTag.appendChild(listImg);
    listItem.appendChild(aTag);
    list.appendChild(listItem);
  });
};

addMoviesToDom(movies);

// Filters
function filterMovies(wordInMovieTitle) {
  let filteredMovies = movies.filter((movie) =>
    movie.Title.includes(wordInMovieTitle)
  );
  addMoviesToDom(filteredMovies);
}

function filterLatestMovies() {
  let latestMovies = movies.filter((releaseYear) => releaseYear.Year >= 2014);
  addMoviesToDom(latestMovies);
}

//Event handlers
const buttonAction = () => {
  const buttons = document.querySelectorAll(".radio-button");
  buttons.forEach(function (buttons) {
    buttons.addEventListener("change", handleOnChangeEvent);
  });
};

const handleOnChangeEvent = (event) => {
  const movieSelected = event.target;
  switch (event.target.value) {
    case "newest":
      filterLatestMovies(2014);
      break;
    case "avengers":
      filterMovies("Avengers");
      break;
    case "x-men":
      filterMovies("X-Men");
      break;
    case "batman":
      filterMovies("Batman");
      break;
    case "princess":
      filterMovies("Princess");
      break;
    case "all":
      addMoviesToDom(movies);
      break;
  }
};

buttonAction();
console.log("The End");
