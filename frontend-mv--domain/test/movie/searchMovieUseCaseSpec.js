import Domain from '../../src'

let domain
describe('SearchMovieUseCase', ()=>{
    beforeEach(()=>{
        domain = new Domain()
    })
    it('#execute', async ()=>{
        // const myUseCase = domain.get('search_movies_user_case')
        // const movies = await myUseCase.execute({keyword: 'batman'})
        const movies = await domain
                .get('search_movies_use_case')
                .execute({keyword: 'batman'})
            console.log(movies)
            debugger
    })
})
