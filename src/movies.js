// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  // a map to return a new array with just the directors of each movie
  const directorsArr = movies.map(function(eachMovie) {
    return eachMovie.director
  })
return directorsArr; // new  array returned

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

  // filter to filter the movies with only director "Steven Spielberg" and that includes drama in its genre
  if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')) {
    return true 
  }; 

return filteredMovies.length // return the length of the array (how many movies)  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  if (!movies.length) {
    return 0;
  }
  let totalAverage = movies.reduce((a, b) => {
    if (b.score) {
      return a + b.score;
    } else {
      return a;
    }
  }, 0);
  return Number((totalAverage / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  let dramaMoviesArr = movies.filter(function(eachMovie) {
    return eachMovie.genre.includes('Drama')});
    return scoresAverage(dramaMoviesArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear() {
  let moviesArr = JSON.parse(JSON.stringify(movies));
  moviesArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });

  return moviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const moviesArr = JSON.parse(JSON.stringify(movies));
  sortedMoviesArr = moviesArr
  .sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  })
  .map(eachMovie => eachMovie.title)
  .slice(0, 20);

return sortedMoviesArr

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes() {
  
    let calculateHour = hourString.split('h');
    return Number(calculateHour[0]) * 60;
    function convertMinutes(minuteString) {
      let calculateMinutes = minuteString.split('min');
      return Number(calculateMinutes[0]);
    }
    function convertDuration(duration) {
      let timePieces = duration.split(' ');
      let minutes = timePieces.reduce((sum, onePiece) => {
        if (onePiece.includes('h')) {
          return sum + convertHours(onePiece); 
        }
        return sum + convertMinutes(onePiece);
      }, 0);
    
      return minutes;
    }
    let moviesHoursToMinArr = movies.map(function(eachMovie) {
      let fixedMovie = JSON.parse(JSON.stringify(eachMovie))
      fixedMovie.duration = convertDuration(fixedMovie.duration)
      return fixedMovie
  })
  return moviesHoursToMinArr

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {
  if (!movies.length) return null; 
  let masterObject = {};
  movies.forEach(eachMovie => {
    if (!masterObject[eachMovie.year]) {
      masterObject[eachMovie.year] = [eachMovie];
    } else {
      masterObject[eachMovie.year].push(eachMovie);
    }
  });
  let highest = 0;
  let theActualYear;
  for (let theYear in masterObject) {
    if (ratesAverage(masterObject[theYear]) > highest) {
      highest = ratesAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average rate of ${highest}`;

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
