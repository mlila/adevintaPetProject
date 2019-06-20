import MovieValueObjectsFactories from '../ValueObjects/factories'
import movieEntityFactory from '../Entities/factories'
import FetcherFactories from '../../Fetcher/factories'
import HTTPMovieRepository from './HTTPMovieRepository'
import MovieErrorsFactory from '../Errors/factories'

export default class MovieRepositoriesFactories {
  static httpMovieRepository = ({config}) =>
    new HTTPMovieRepository({
      fetcher: FetcherFactories.httpFetcher(),
      movieListValueObjectFactory:MovieValueObjectsFactories.movieListValueObject,
      movieEntityFactory: movieEntityFactory.movieEntity,
      notFoundMovieErrorFactory : MovieErrorsFactory.NotFoundMovieError,
      config
    })
}
