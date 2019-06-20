import Domain from '../../src'
import NotFoundMovieError from '../../src/movie/Errors/NotFoundMovieError'
import { expect } from 'chai'


let domain
const _id = 320288
describe.only('GetDetailMovieUseCase', ()=>{
    beforeEach(()=>{
        domain = new Domain()
    })
    it('#execute', async ()=>{
        
        const detail = await domain
                .get('get_detail_movie_use_case')
                .execute({id: _id})
            console.log(detail)
            debugger
    })
    it('#execute id not found', async ()=>{
        try{
            const detail = await domain
                .get('get_detail_movie_use_case')
                .execute({id: 79878979})

        }catch(error){
            expect(error).to.be.instanceOf(NotFoundMovieError)

        }

    })
})