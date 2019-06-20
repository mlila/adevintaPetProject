import Domain from '../../src'

let domain
describe('GetTrendingMovieUseCase', ()=>{
    beforeEach(()=>{
        domain = new Domain()
    })
    it('#execute', async ()=>{
        // const myUseCase = domain.get('search_movies_user_case')
        // const movies = await myUseCase.execute({keyword: 'batman'})
        const trending = await domain
                .get('get_trending_movies_use_case')
                .execute()
            console.log(trending)
            debugger
    })
})