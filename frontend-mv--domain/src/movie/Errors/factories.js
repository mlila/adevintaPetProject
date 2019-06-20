import GenericMovieError from './GenericMovieError'
import NotFoundMovieError from './NotFoundMovieError'


export default class MovieErrorsFactory{
    static genericMovieError = () => new GenericMovieError()
    static notFoundMovieError = () => new NotFoundMovieError()
    
}