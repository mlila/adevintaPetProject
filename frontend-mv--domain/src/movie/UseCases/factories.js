import MovieRepositoriesFactories from '../Repositories/factories'
import SearchMovieUseCase from './SearchMovieUseCase'
import GetTrendingMovieUseCase from './GetTrendingMovieUseCase'
import GetDetailMovieUseCase from './GetDetailMovieUseCase'

export default class MovieUseCasesFactories {
  static searchMovieUseCase = ({config}) =>
    new SearchMovieUseCase({
      repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })

  static getTrendingMovieUseCase = ({config}) => {
    return new GetTrendingMovieUseCase({
      repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })
  }
  static getDetailMovieUseCase = ({config}) => {
    return new GetDetailMovieUseCase({
      repository: MovieRepositoriesFactories.httpMovieRepository({config})
    })
  }
}
