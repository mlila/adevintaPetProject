import MovieEntity from './MovieEntity'

export default class MovieEntitiesFactories {
  static movieEntity = ({id, title, image, description}) => new MovieEntity({id, title, image, description})
}
