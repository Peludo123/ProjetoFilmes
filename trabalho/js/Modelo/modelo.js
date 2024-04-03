export class Filme {
  async getFilmes() {
      try {
          const options = {
              method: 'GET',
              headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjEzODE5MzM0NDlkNWQxNWY3ZDBiNmE2YjFmODdhMSIsInN1YiI6IjYxMTcxNmY0MzUwMzk4MDAyZGI3Yzk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ys_LkZ7sDiPL14OdvOVP0N5VZr3-IbyR1G4BwIeCLXs'
              }
          }

          const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`
          
          const response = await fetch(apiUrl, options);
          const result = await response.json();
          console.log(result)
          return result.results.map(filme => ({
              title: filme.title,
              release_date: filme.release_date,
              id: filme.id,

              banana: "https://image.tmdb.org/t/p/w200/" + filme.poster_path,vote_average:filme.vote_average

          }
        )
     )

      } catch (error) {
          console.log(error);
      }
  }
}